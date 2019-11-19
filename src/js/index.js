import React from "react";
import ReactDOM from "react-dom";
import "bootstrap";
import "../styles/index.scss";
import PropTypes from "prop-types";

class Seconds extends React.Component {
	constructor(props) {
		super(props);
		this.state = { distance: props.interval };
	}
	componentDidMount() {
		setInterval(() => {
			this.setState(() => {
				return { distance: this.state.distance + 1 };
			});
		}, 1000);
	}
	render() {
		return <p>{this.state.distance}</p>;
	}
}

var counter = 0;
ReactDOM.render(<Seconds interval={counter} />, document.querySelector("#app"));
Seconds.propTypes = {
	interval: PropTypes.number
};
