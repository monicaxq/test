import { combineReducers } from 'redux'

function changenum(state = 0, action) {
    switch (action.type) {
        case 'CHANGE_NUM': return state + action.val;
        default: return state
    }
}



var missiondefault = [{ id: '1', work: '今天去吃饭', isdo: 0 }, { id: '2', work: '今天去吃火锅', isdo: 1 }]
function addmission(state = missiondefault, action) {
    switch (action.type) {
        case 'ADD_MISSION': return [...state, { id: state.length + 1 + '', work: action.text, isdo: 0 }];
        case 'CHANGE_DO':
            for (let i of state) {
                if (i.id == action.id) {
                    i.isdo = !i.isdo
                }
            }
            return [...state]
        default: return state
    }
}


var fliterseat = '全部'
function changeseat(state = fliterseat, action) {
    switch (action.type) {
        case 'FILTER':
            switch (action.text) {
                case '全部': return '全部'
                case '已完成': return '已完成'
                case '未完成': return '未完成'
            }

        default: return state
    }
}




var fuc = combineReducers({
    changenum,
    addmission,
    changeseat
})

export default fuc