export function changeNUM(val) {
    return {
        type: 'CHANGE_NUM',
        val
    }
}


export function addmission(text) {
    return {
        type: 'ADD_MISSION',
        text
    }
}

export function changedo(id) {
    return {
        type: 'CHANGE_DO',
        id
    }
}

export function filter(text) {
    return {
        type: 'FILTER',
        text
    }
}