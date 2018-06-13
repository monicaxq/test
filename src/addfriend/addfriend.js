import React from 'react'
import Waitlist from './waitlist'
import Friendlist from './friendlist'
import Addquest from './addquest'


class Friendbox extends React.Component {

    constructor(p) {
        super(p)
        this.state = {
            waitlist: [{ id: '1', name: '张三' },
            { id: '2', name: '李四' },
            { id: '3', name: '王五' },],
            friendlist: ['钢铁侠']
        }
    }

    render() {
        return (<div className='firendbox'>
            <Addquest addwlist={this.addwlist.bind(this)} />
            <Waitlist
                cls='waitlist'
                list={this.state.waitlist}
                acceptBtn={this.addfriend.bind(this)}
                refusetBtn={this.delfriend.bind(this)}
            />
            <Friendlist list={this.state.friendlist} />
        </div>)
    }


    addwlist(value) {
        this.state.waitlist.push({ id: this.state.waitlist[this.state.waitlist.length - 1].id - 0 + 1 + '', name: value })
        this.setState({})
        console.log(this.state.waitlist)
    }

    addfriend(id) {
        this.state.waitlist.map((item, index) => {
            if (item.id == id) {
                this.state.friendlist.push(item.name)
                this.state.waitlist.splice(index, 1)
            }
        })
        this.setState({})
    }
    delfriend(id) {
        this.state.waitlist.map((item, index) => {
            if (item.id == id) {
                this.state.waitlist.splice(index, 1)
            }
        })
        this.setState({})
    }
}

export default Friendbox