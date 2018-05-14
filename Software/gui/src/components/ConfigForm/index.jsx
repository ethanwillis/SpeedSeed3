// ./src/components/Piechart/index.jsx
 
import React, { Component } from "react";
 
class ConfigForm extends Component {
	constructor(props) {
        super(props);
        this.state = {
            value: props.value,
        };
    }

    onChange(event) {
        console.log(event.target.value);
        this.setState({value: event.target.value});
    }

    render() {
		return (
        <div className="float-left">
            <form padding-top="20">
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label" htmlFor="fromInput">From:</label>
                    <div className="col-sm-10">
                    <input type="time"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"  htmlFor="toInput">To:</label>
                    <div className="col-sm-10">
                    <input type="time"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label" htmlFor="valueInput">Value:</label>
                    <div className="col-sm-10">
                        <input id="valueInput" type="range" value={this.state.value}
                            min={this.props.min} max={this.props.max} 
                            onChange={this.onChange.bind(this)}
                        />
                        <label>{this.state.value}</label>
                    </div>
                    <button onClick={this.sendSettings} className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
		);
	}
}
 
export default ConfigForm;