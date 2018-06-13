import React from 'react'
import { connect } from "react-redux";

//ACTIONS changeFinish改变任务状态
import { changeFinish } from '../store1/actions.js'

//任务显示组件
class Todolist extends React.Component {

    //渲染函数
    render() {
        return (
            < ul >
                {
                    this.props.mission.map((item, index) => {
                        return <li key={index} id={item.id} className={item.isFinish ? 'finish' : ''} onClick={this.clickFinish.bind(this)} >{item.text}</li>
                    })
                }
            </ul >)
    }

    //点击改变任务状态（传递id）
    clickFinish(e) {
        this.props.dispatch(changeFinish(e.target.id))
    }
}

//筛选任务状态数据
function filterData(data) {
    switch (data.filterResult) {
        case '全部': return { mission: data.quest };
        case '已完成': return {
            mission: data.quest.filter((item) => {
                return item.isFinish == true
            })
        };
        case '未完成': return {
            mission: data.quest.filter((item) => {
                return item.isFinish == false
            })
        };
    }
}

export default connect(filterData)(Todolist)