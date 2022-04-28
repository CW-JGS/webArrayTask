/*
    Some utility functions I used alot, I am not sure that they will work in browsers as they use some 
    pretty janky syntax that V8 might not understand.
*/

export const qs = (element, parent=document) => parent.querySelector(element);

export const getValue = (element) => element.value

// epic double lambda expression
export const cheekyArrayMethod = (array, value) => array.filter(val=>(val==value)).length    
