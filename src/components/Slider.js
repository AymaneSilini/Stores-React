import React from 'react';
import { RangeStepInput } from 'react-range-step-input';

class Fridge extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 50
        };
    }
    render() {
        return <div>
            <RangeStepInput
                min={0} max={100}
                value={this.state.value} step={1}
                onChange={this.onChange.bind(this)}
            />
            <h3>{this.state.value} %</h3>
        </div>;
    };
    onChange(e) {
        const newVal = (e.target.value);
        this.setState({ value: newVal });
    }
};

export default Fridge;