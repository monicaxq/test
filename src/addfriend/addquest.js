import React from 'react'

class Addquest extends React.Component {

    constructor(p) {
        super(p)
        this.state = {
            value: ''
        }
    }

    render() {
        return (<div>
            <span>用户名</span>
            <input value={this.state.value} onChange={this.handleValue.bind(this)} />
            <button onClick={this.application.bind(this)}>发送申请</button>
        </div>
        )
    }

    handleValue(e) {
        this.setState({ value: e.target.value })
    }

    application() {
        this.props.addwlist(this.state.value)
    }

}

export default Addquest