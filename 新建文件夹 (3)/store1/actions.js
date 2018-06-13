//添加任务
export function addQuest(val) {
    return {
        type: 'ADD_QUEST',
        val
    }
}
//改变任务状态
export function changeFinish(id) {
    return {
        type: 'CHANGE_FINISH',
        id
    }
}
//更改筛选条件
export function changeFilter(text) {
    return {
        type: 'CHANGE_FILTER',
        text
    }
}
