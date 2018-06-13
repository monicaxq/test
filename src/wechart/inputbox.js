import React from 'react'

class Inputbox extends React.Component {

    constructor(p) {
        super(p)
        this.state = {
            value1: '',
            value2: ''
        }
    }

    render() {

        return (<div>
            <div>
                <input type='text'
                    value={this.state.value1}
                    onChange={this.handleChange1.bind(this)}
                />
                <button onClick={this.pushmetext.bind(this)} >我发送</button>
            </div>
            <div>
                <input type='text'
                    value={this.state.value2}
                    onChange={this.handleChange2.bind(this)} />
                <button onClick={this.pushzhangtext.bind(this)}>张三发送</button>
            </div>
        </div>)

    }
    handleChange2(e) {
        this.setState({ value2: e.target.value })
    }
    handleChange1(e) {
        this.setState({ value1: e.target.value })
    }

    pushmetext() {
        this.props.clickbtn(this.state.value1, '我')
        this.setState({ value1: '' })
    }

    pushzhangtext() {
        this.props.clickbtn(this.state.value2, '张三')
        this.setState({ value2: '' })
    }
}

export default Inputbox