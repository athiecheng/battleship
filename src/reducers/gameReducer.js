const defaultState = {
    shipleft: 14,
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
    const newstate = defaultState
    console.log("start" +newstate);
    for (let i = 2; i < 6; i++) {
        let allclear = false;
        while (allclear == false){
            
            let dir = getRandomInt(2);
            let startx = getRandomInt(10);
            let starty = getRandomInt(10);
            let count = 0;
            while (startx<=9 && starty<=9 && newstate.boxMap[startx][starty] !== "X"   ){
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
                            startx -=1
                            console.log(startx+" row "+starty);
                            newstate.boxMap[startx][starty] = "X"
                            
                        }
                        else{
                            starty -=1
                            console.log(startx+" col "+starty);
                            newstate.boxMap[startx][starty] = "X"
                            
                        }
                        
                    }
                    allclear = true;
                    if (dir === 0){
                        startx +=1
                    }
                    else{
                        starty +=1
                    }
                    
                }
                

        }
        

        }
        console.log("ship of "+ i)
        

    }
    return newstate;
}

export default function gameReducer(state, action) {
    if (state === undefined) {
        console.log("running");
        return defaultState
    }

    if (action.type === 'playGame'){
        for (var i = 0; i < state.boxMap.length; i++) {
            for( var j = 0; j < state.boxMap[0].length; j++){
                state.boxMap[i][j] = ''
            }
        }
        return generateGameBoard()
    }

    if (action.type === 'boardClick') {
        const value = state.boxMap[action.x][action.y];
        if (value === 'X') {
            state.boxMap[action.x][action.y] = 'B';
            state.shipleft -= 1
        } else if (value === ''){
            state.boxMap[action.x][action.y] = 'R';
            
        }
        if (state.shipleft)
            

        
        return { ...state };
    }
    if (action.type === 'resetButton') {
        for (var i = 0; i < state.boxMap.length; i++) {
            for( var j = 0; j < state.boxMap[0].length; j++){
                state.boxMap[i][j] = ''
            }
        }
        return generateGameBoard()
    }
    return state; 
}
