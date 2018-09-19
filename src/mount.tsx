import * as React from "react";

interface MountProps {
  on: () => void;
}

export class Mount extends React.Component<MountProps, {}> {
  componentDidMount() {
    const { on } = this.props;
    on();
  }

  render() {
    const { children } = this.props;
    return children;
  }
}
