const defaultState = {
    blackBox:0, 
    boxMap: [
    ['',''],
    ['','']
]};



export default function gameReducer(
    state = defaultState, action
) {
    if (action.type === 'boardClick') {
        const value = state.boxMap[action.x][action.y];
        if (value === 'X') {
            state.boxMap[action.x][action.y] = '0';
            state.blackBox -= 1
        } else {
            state.boxMap[action.x][action.y] = 'X';
            state.blackBox += 1

        }
        return {...state};
    }
    if (action.type === 'resetButton') {
        for (var i = 0; i < state.boxMap.length; i++) {
            for( var j = 0; j < state.boxMap[0].length; j++){
                state.boxMap[i][j] = ''
            }
        }
        return {...state}
    }
    return state; 
}