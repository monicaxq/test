import React from 'react'

class CoundNum extends React.Component {

    constructor(p) {
        super(p)
        this.state = {
            count: 0
        }
    }

    render() {

        return (<div>
            <button onClick={this.delbtn.bind(this)}>-</button>
            <label>{this.state.count}</label>
            <button onClick={this.addbtn.bind(this)}>+</button>
        </div>)

    }

    delbtn() {
        this.setState({
            count: this.state.count - 1
        })
    }

    addbtn() {
        this.setState({
            count: this.state.count + 1
        })
    }
}

export default CoundNum