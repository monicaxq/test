import React from 'react'
import { connect } from "react-redux";

//ACTIONS changeFilter更改筛选条件
import { changeFilter } from '../store1/actions.js'

//底部显示组件
class Bottom extends React.Component {

    //渲染函数
    render() {
        return (
            <div onClick={this.clickBtn.bind(this)}>
                <span>全部</span>
                <span>已完成</span>
                <span>未完成</span>
            </div>
        )
    }
    //点击更改筛选条件
    clickBtn(e) {
        if (e.target.nodeName == 'SPAN') {
            this.props.dispatch(changeFilter(e.target.innerHTML))
        }
    }
}

export default connect()(Bottom)