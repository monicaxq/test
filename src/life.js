import React from 'react'

class Life extends React.Component {

    constructor(p) {
        super(p)
        this.state = {
            value: 'mmp'
        }
        console.log('constrctor')
    }

    componentWillMount() {
        console.log('componentWillMount')
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    render() {
        return (<div onClick={this.mmp.bind(this)}>{this.state.value}</div>)

    }


    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState)
        return true
    }

    componentWillUpdate() {
        console.log('componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    mmp() {
        this.setState({
            value: 'rinima'
        })
    }

}

export default Life