import React from 'react'

import { connect } from "react-redux";
import { changeNUM } from './store/actions'


class Btnn extends React.Component {

    render() {
        let { cls, na } = this.props;
        return (
            <button className={cls} onClick={this.clickBtn.bind(this)}>{na}</button>
        )
    }

    //点击按钮
    clickBtn() {
        this.props.dispatch(changeNUM(this.props.na == '+' ? 1 : -1))
    }


}

export default connect()(Btnn)