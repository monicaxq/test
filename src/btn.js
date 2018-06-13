import React from 'react'

import Btnn from './btn2.js'
import { connect } from "react-redux";


class Btn extends React.Component {

    render() {
        return (<div>
            <Btnn na='+' />
            <label className={this.props.clas}>{this.props.changenum}</label>
            <Btnn na='-' />
        </div>)
    }
}

function filter(data) {
    return {
        changenum: data.changenum
    }
}


export default connect(filter)(Btn)