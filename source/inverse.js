'use strict';

const inverse = function (array, index = 0) {
    if (index == 0) return array.reverse();

    if (index > 0) 
    {
        let newArr = array.slice(0, index);
        array.splice(0, index);
        array.reverse();
        array = newArr.concat(array);
        return array;
    }
    else 
    {
        let newArr = array.slice(index);
        array.splice(index);
        array.reverse();
        array = array.concat(newArr);
        return array;
    }
};