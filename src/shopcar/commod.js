import React from 'react'

class Commod extends React.Component {

    constructor(p) {
        super(p)
        this.state = {

        }
    }

    render() {
        return (<tr>
            <td><input type='checkbox' checked={this.props.ischecked} onChange={this.cahngchecked.bind(this)} /></td>
            <td>{this.props.name}</td>
            <td>{this.props.price}</td>
            <td><button onClick={this.change1.bind(this)}>-</button></td>
            <td>{this.props.con}</td>
            <td><button onClick={this.change2.bind(this)}>+</button></td>
            <td>{this.props.smla}</td>
            <td><a href='#' onClick={this.clickDel.bind(this)}>删除</a></td>
        </tr>)
    }

    cahngchecked() {
        this.props.change(this.props.id)
    }

    change1() {
        this.props.click1(this.props.id)
    }
    change2() {
        this.props.click2(this.props.id)
    }
    clickDel() {
        this.props.clickRemove(this.props.id)
    }
}

export default Commod;