import React from "react";

export class Tooltip extends React.PureComponent {
  constructor(props) {
    super(props);

    this.dom = React.createRef();

    props.builder.addHook("setCursor", (u) => {
      let el = this.dom.current;
      el.style.left = u.cursor.left + "px";
      el.style.top = u.cursor.top + "px";
    });
  }

  render() {
    return <div className="tooltip" ref={this.dom}>Tooltip!</div>;
  }
}