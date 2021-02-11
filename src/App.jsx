import React from "react";
import { UPlot } from "./UPlot";
import { Tooltip } from "./Tooltip";
import { OptsBuilder } from "./OptsBuilder";
import { randomColor } from "./utils";

export class App extends React.PureComponent {
	constructor(props) {
		super(props);

		let builder = new OptsBuilder();

		builder.addSeries({
			label: "Foo",
			stroke: randomColor(),
		});

		this.state = {
			uOpts: builder,
			uData: [
				[0, 1, 2],
				[0, 1, 2]
			],
		};
	}

	randomStroke() {
		let builder = new OptsBuilder();

		builder.addSeries({
			label: "Foo",
			stroke: randomColor(),
		});

		this.setState({
			uOpts: builder,
		});
	}

	randomData() {
		let builder = new OptsBuilder();

		builder.addSeries({
			label: "Foo",
			stroke: randomColor(),
		});

		this.setState({
			uData: [
				this.state.uData[0],
				this.state.uData[1].map(v => Math.random()),
			],
		});
	}

	render() {
		return (
			<div className="App">
				<UPlot key={this.state.uOpts.rev} builder={this.state.uOpts} data={this.state.uData}>
					<Tooltip />
				</UPlot>
				<button onClick={() => this.randomStroke()}>Stroke color change (re-init)</button>
				<br/>
				<button onClick={() => this.randomData()}>Random Data (setData))</button>
			</div>
		);
	}
}
