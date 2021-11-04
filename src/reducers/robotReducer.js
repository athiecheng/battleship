const defaultState = {
    blackBox: 0,
    boxMap: [
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '']
    ]

};

function getRandomInt(max) {
    // min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max + 1));
}

function generateGameBoard() {
    console.log(defaultState);
    
    for (let i = 2; i < 6; i++) {
        let dir = getRandomInt(2);
        let startx = getRandomInt(5);
        let starty = getRandomInt(5);
        for (let j = 0; j < i; j++) {
            if (dir === 0) {
                defaultState.boxMap[startx][starty] = "X";
                startx +=1;
            }
            else{
                console.log("hori"+ i + j)
                defaultState.boxMap[startx][starty] = "X";
                starty +=1;
            }


        }
        console.log("ship of "+ i)

    }
    return defaultState;
}

export default function roborReducer(state, action) {
    if (state === undefined) {
        return generateGameBoard()
    }
    
    if (action.type === 'boardClick') {
        const value = state.boxMap[action.x][action.y];
        if (value === 'X') {
            state.boxMap[action.x][action.y] = '0';
            state.blackBox -= 1
        } else {
            state.boxMap[action.x][action.y] = 'X';
            state.blackBox += 1

        }
        return { ...state };
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
