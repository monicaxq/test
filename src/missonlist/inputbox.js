import React from 'react';
import { connect } from "react-redux";


import { addmission } from '../store/actions'

class Inputbox extends React.Component {

    constructor(p) {
        super(p);
        this.state = {
            value: ''
        }
    }

    render() {

        return (<div>
            <input value={this.state.value} onChange={this.change.bind(this)} />
            <button onClick={this.addwork.bind(this)}>添加</button>
        </div>)

    }

    change(e) {
        this.setState({ value: e.target.value })
    }

    addwork() {
        this.props.dispatch(addmission(this.state.value))
    }


}

export default connect()(Inputbox)