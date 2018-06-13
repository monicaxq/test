import React from 'react'
import Commod from './commod.js'

class Shopcar extends React.Component {

    constructor(p) {
        super(p)
        this.state = {
            comm: [{ id: '1', name: 'ipad1', price: 2400, con: 1, ischecked: true },
            { id: '2', name: 'ipad2', price: 1200, con: 1, ischecked: true },
            { id: '3', name: 'ipad3', price: 2100, con: 1, ischecked: false },
            { id: '4', name: 'ipad4', price: 3000, con: 1, ischecked: true }],
            Allchecked: false
        }
    }

    render() {

        return (<div className={this.props.cls}>
            <table><tbody>
                {this.state.comm.map((item, index) => {
                    return <Commod key={item.id}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        con={item.con}
                        ischecked={item.ischecked}
                        smla={item.price * item.con}
                        click1={this.delcom.bind(this)}
                        click2={this.addcom.bind(this)}
                        change={this.changeitem.bind(this)}
                        clickRemove={this.remove.bind(this)}
                    />
                })}
            </tbody></table>
            <div>
                <input type='checkbox'
                    checked={this.state.Allchecked}
                    onChange={this.changeAll.bind(this)} />
                总数量：{this.totalcon()}
                总计:{this.sum()}</div>
        </div>)

    }

    changeAll() {
        if (this.state.Allchecked) {
            this.state.comm.map((item) => { item.ischecked = false })
        } else {
            this.state.comm.map((item) => { item.ischecked = true })
        }
        this.state.Allchecked = !this.state.Allchecked
        this.setState({})
    }


    //选单个
    changeitem(id) {
        this.state.comm.map((item, index) => {
            if (item.id == id) {
                item.ischecked = !item.ischecked
            }
        })
        this.setState({})
    }

    //删除
    remove(id) {
        for (let i = 0; i < this.state.comm.length; i++) {
            if (id == this.state.comm[i].id) {
                this.state.comm.splice(i, 1)
            }
        }
        this.setState({})
    }

    //总数
    totalcon() {
        let sum = 0;
        for (let item of this.state.comm) {
            if (item.ischecked) {
                sum += item.con
            }
        }
        return sum
    }
    //总价钱
    sum() {
        let sum = 0;
        for (let item of this.state.comm) {
            if (item.ischecked) {
                sum += item.con * item.price
            }
        }
        return sum
    }

    delcom(id) {
        for (let i = 0; i < this.state.comm.length; i++) {
            if (id == this.state.comm[i].id) {
                this.state.comm[i].con--
            }
        }
        this.setState({})
    }
    addcom(id) {
        for (let i = 0; i < this.state.comm.length; i++) {
            if (id == this.state.comm[i].id) {
                this.state.comm[i].con++
            }
        }
        this.setState({})
    }
}



export default Shopcar