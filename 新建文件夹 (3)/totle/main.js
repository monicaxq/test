import React from 'react'
import Top from './top.js'
import Todolist from './tot.js'
import Btn from './button.js'
import { connect } from "react-redux";


//整体显示组件
class Main extends React.Component {

    //渲染函数
    render() {
        return (
            <div>
                <Top />
                <Todolist />
                <Btn />
            </div>)
    }
}

export default connect()(Main)