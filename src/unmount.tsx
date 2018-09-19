import * as React from "react";

interface UnmountProps {
  on: Function;
}

export class Unmount extends React.Component<UnmountProps, {}> {
  componentWillUnmount() {
    const { on } = this.props;
    on(this.props);
  }

  render() {
    const { children } = this.props;
    return children;
  }
}
