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
        let allclear = false;
        while (allclear == false){
            let dir = getRandomInt(2);
            let startx = getRandomInt(5);
            let starty = getRandomInt(5);
            let count = 0;
            while (defaultState.boxMap[startx][starty] != "X" {
                if (dir === 0) {
                    startx +=1;
                }
                else{
                    starty +=1;
                }
                count += 1;
                if (count == i){
                    for (let j = 0;j<i;j++){
                        if (dir === 0){
                            defaultState.boxMap[startx][starty] = "X"
                            startx -=1
                        }
                        else{
                            defaultState.boxMap[startx][starty] = "X"
                            starty -=1
                        }
                        
                    }
                    allclear = true;
                }
                

        }
        

        }
        console.log("ship of "+ i)

    }
    return defaultState;
}

export default function gameReducer(state, action) {
    if (state === undefined) {
        return generateGameBoard()
    }

    if (action.type === 'boardClick' || action.type === 'noBoardClick') {
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
    return state;
}
