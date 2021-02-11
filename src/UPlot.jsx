import React from "react";
import uPlot from "uplot";

export class UPlot extends React.PureComponent {
	constructor(props) {
		super(props);
		this.dom = React.createRef();
		this.builder = props.builder;
		this.u = null;
	}

	componentDidMount() {
		this.u = new uPlot(this.builder.build(), this.props.data, this.dom.current);
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (nextProps.data != this.props.data) {
			this.u.setData(this.props.data);
			return true;
		}
		else {
			console.log("no!");
			return false;
		}
	}

	componentWillUnmount() {
		this.u.destroy();
	}

	render() {
		return (
			<div ref={this.dom}>
				{React.cloneElement(this.props.children, {
					builder: this.builder
				})}
			</div>
		);
	}
}
