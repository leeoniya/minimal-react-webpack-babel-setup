import { randomColor } from "./utils";

export class OptsBuilder {
	constructor(opts) {
        this.rev = Math.random();

		this.opts = Object.assign({
			width: 800,
			height: 400,
			scales: {
				x: {
					time: false
				}
			},
			series: [
                {},
            ],
			hooks: {},
		}, opts);
	}

	addHook(type, callback) {
		const { hooks } = this.opts;
		(hooks[type] = hooks[type] || []).push(callback);
	}

	addSeries(seriesOpts) {
		const { series } = this.opts;
		series.push(Object.assign({
			label: "Series " + series.length + 1,
			stroke: randomColor(),
		}, seriesOpts));
	}

	build() {
		return this.opts;
	}
}