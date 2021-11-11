import { Normalplay } from "../components";

const defaultState = {
    human_shipleft: 14,
    robot_shipleft:14,
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
    ],
    robotMap: [
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
    ],
    normalPlay: true

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
            while (startx<=9 && starty<=9 && newstate.boxMap[startx][starty] != "X" ){
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

    for (let i = 2; i < 6; i++) {
        let allclear = false;
        while (allclear == false){
            
            let dir = getRandomInt(2);
            let startx = getRandomInt(10);
            let starty = getRandomInt(10);
            let count = 0;
            while (startx<=9 && starty<=9 && newstate.robotMap[startx][starty] != "X" ){
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
                            newstate.robotMap[startx][starty] = "X"
                            
                        }
                        else{
                            starty -=1
                            console.log(startx+" col "+starty);
                            newstate.robotMap[startx][starty] = "X"
                            
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
        return generateGameBoard()
    }

    // if (action.type === 'playGame'){

    //     return generateGameBoard()
    // }

    // if(action.type === 'normalPlay') {
    //     generateGameBoard(boxMap)
    //     return generateGameBoard(robotMap)
    // }
   
    
    // if (action.type === 'Normalplay'){
        if (action.type === 'boardClick') {
            const value = state.robotMap[action.x][action.y];
            if (value === 'X' || value ===''){
                if (value === 'X') {
                    state.robotMap[action.x][action.y] = 'B';
                    state.robot_shipleft -= 1
                } else if (value === ''){
                    state.robotMap[action.x][action.y] = 'R';
                }
                if (state.robot_shipleft !== 0 && state.normalPlay === true){
                    let robotx= getRandomInt(9)
                    let roboty= getRandomInt(9)
                    while (state.boxMap[robotx][roboty] === 'B' || state.boxMap[robotx][roboty] === 'R'){
                        robotx= getRandomInt(9)
                        roboty= getRandomInt(9)
                    }
                    console.log(robotx,roboty)
                    const rob_value = state.boxMap[robotx][roboty]
                    
                    if (rob_value === 'X') {
                        state.boxMap[robotx][roboty] = 'B';
                        state.human_shipleft -= 1
                    } else if (rob_value === ''){
                        state.boxMap[robotx][roboty] = 'R';
                        }
                }
            }
            return { ...state };
        }
    // }
    
    if (action.type === 'resetButton') {
        for (var i = 0; i < state.boxMap.length; i++) {
            for( var j = 0; j < state.boxMap[0].length; j++){
                state.boxMap[i][j] = ''
            }
        }
        for (var i = 0; i < state.robotMap.length; i++) {
            for( var j = 0; j < state.robotMap[0].length; j++){
                state.robotMap[i][j] = ''
            }
        }
        return generateGameBoard()
    }
    return state; 
}
