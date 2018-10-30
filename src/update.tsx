import * as React from "react";

type WasUpdatedFunction<T> = (prevWatched: T, currentWatched: T) => void;

interface UpdateProps<T> {
  was: WasUpdatedFunction<T>;
  watched: T;
}

function shallowEquals<T>(prevWatched: T, currentWatched: T) {
  if (typeof prevWatched !== "object") {
    return prevWatched === currentWatched;
  }

  const prevValuesKeys = Object.keys(prevWatched);
  const currentValuesKeys = Object.keys(currentWatched);

  if (prevValuesKeys.length !== currentValuesKeys.length) {
    return false;
  }

  return prevValuesKeys.every(
    key => prevWatched[key as keyof T] === currentWatched[key as keyof T]
  );
}

export class Update<T> extends React.Component<UpdateProps<T>, {}> {
  componentDidUpdate(prevProps: UpdateProps<T>) {
    const { was } = this.props;

    if (!shallowEquals(prevProps.watched, this.props.watched)) {
      was(prevProps.watched, this.props.watched);
    }
  }

  render() {
    const { children } = this.props;
    return children || null;
  }
}
