import * as React from "react";

interface MountProps {
  on: Function;
}

export class Mount extends React.Component<MountProps, {}> {
  componentDidMount() {
    const { on } = this.props;
    on(this.props);
  }

  render() {
    const { children } = this.props;
    return children;
  }
}
