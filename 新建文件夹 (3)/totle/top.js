import React from 'react'
import { connect } from "react-redux";

//ACTIONS addQuest添加任务
import { addQuest } from '../store1/actions.js'

//顶部输入组件
class Top extends React.Component {

    //渲染函数
    render() {
        return (
            <div>
                <input ref='text' />
                <button onClick={this.clickBtn.bind(this)}> 添加</button>
            </div >)
    }

    //点击添加按钮
    clickBtn() {
        this.props.dispatch(addQuest(this.refs.text.value))
    }
}

export default connect()(Top)