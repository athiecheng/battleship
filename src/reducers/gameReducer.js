const defaultState = {
    blackBox:0, 
    boxMap: [
    ['',''],
    ['','']
]};



export default function gameReducer(
    state = defaultState, action
) {
    if (action.type === 'boardClick' || action.type === 'noBoardClick') {
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
    return state;
}