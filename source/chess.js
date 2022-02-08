'use strict'

const chess = (inputSize) => {
    let size = +inputSize;
    if(size <= 1){
        return null;
    }

    let strWithBegin = "";
    for(let i = 0; i < size; i++){
        if(!(i % 2)){
            strWithBegin += "*";
        }else {
            strWithBegin += " ";
        }
    }
    strWithBegin +="\n";

    let strWithoutBegin = "";
    for(let i = 0; i < size; i++){
        if(i % 2){
            strWithoutBegin += "*";
        }else {
            strWithoutBegin += " ";
        }
    }
    strWithoutBegin +="\n";

    let outputStr = "";
    for(let i = 0; i < size; i++){
        if(i % 2){
            outputStr+=strWithoutBegin;
        }else {
            outputStr+=strWithBegin;
        }
    }

    return outputStr;
}
