import * as React from "react";

interface UnmountProps {
  on: () => void;
}

export class Unmount extends React.Component<UnmountProps, {}> {
  componentWillUnmount() {
    const { on } = this.props;
    on();
  }

  render() {
    const { children } = this.props;
    return children;
  }
}
