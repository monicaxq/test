import React from 'react'


import Showbox from './showbox'
import Inputbox from './inputbox'


class Wechart extends React.Component {

    constructor(p) {
        super(p)
        this.state = {
            msglst: [{ text: '今天天气真好', user: '我' }]
        }
    }

    render() {

        return (<div>
            <Showbox cls='showbox' text={this.state.msglst} />
            <Inputbox clickbtn={this.addmsg.bind(this)} />
        </div>)

    }

    addmsg(msg, user) {
        console.log(msg, user)
        this.state.msglst.push({ text: msg, user: user })
        this.setState({})
    }


}

export default Wechart