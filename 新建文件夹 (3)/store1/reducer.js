import { combineReducers } from 'redux'

let questList = [
    {
        text: '采矿',
        id: '1',
        isFinish: false
    },
    {
        text: '买鞋',
        id: '2',
        isFinish: true
    }
]

function quest(state = questList, action) {
    switch (action.type) {
        //添加任务
        case 'ADD_QUEST':
            let newArr = [...state, { text: action.val, id: state.length + 1 + '', isFinish: false }]
            return newArr
        // 修改任务状态
        case 'CHANGE_FINISH':
            for (let i of state) {
                if (i.id == action.id) {
                    i.isFinish = !i.isFinish
                }
            }
            return [...state]
        default:
            return state
    }
}

//修改筛选条件
let filterDefalut = '全部'
function filterResult(state = filterDefalut, action) {
    switch (action.type) {
        case 'CHANGE_FILTER':
            switch (action.text) {
                case '全部': return '全部'
                case '已完成': return '已完成'
                case '未完成': return '未完成'
            }
        default: return state
    }
}


export default combineReducers({
    quest,
    filterResult
})




