export const checkWinner=(squares , turn) => {
    var previousClick='';
    if((turn-1)%2 === 0)
        previousClick='X';
    else
        previousClick='O';
    var flag = -1;
    const list=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ]
    var x;
    for(x in list){
        var [a , b ,c] = list[x];
        if(squares[a]=== previousClick && squares[b]=== previousClick && squares[c]=== previousClick)
        {
            flag = 1;
            break;
        }
            
    }
    
    
    if(flag === 1)
        return true;
    else
        return false;
}
