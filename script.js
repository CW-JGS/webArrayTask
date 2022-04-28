function qs(element, parent=document) {
    return parent.querySelector(element);
}
function getValue(element) {
    // console.log(parent.value)
    return element.value
}
function cheekyArrayMethod(array, value) {
    return array.filter(val=>(val==value)).length    
}
const task1 = qs(".task1");
const task2 = qs(".task1");
const task3 = qs(".task1");
const task4 = qs(".task1");
const task5 = qs(".task1");
//task 1 
const task1NameListSize = qs(".nameListSize")
const task1List = qs(".namesList");
const task1Input = qs(".nameInput");
const task1Submit = qs(".task1Submit")
var namesTries = 5;
var namesInputed = [];
task1NameListSize.textContent = namesTries;

task1Submit.addEventListener("click", () => {
    // console.log(event);
    if(namesTries >0) {
        let data = getValue(task1Input);
        // console.log(data);
        namesInputed.push(data);
        task1Input.value = "";
        namesTries --;
        task1NameListSize.textContent = namesTries;
        if(namesTries ==0) {
            task1Input.disabled = true;
            for(let i =0; i<namesInputed.length;i++) {
                let task1ListItem = document.createElement('li');
                task1ListItem.textContent = `hello ${namesInputed[i]}`;
                try {
                    task1List.append(task1ListItem);
                } catch (err) {
                    console.log(`error encountered ${err}`)
                }
            }
        }
    } 
})

// task 2
const task2Counter = qs(".task2Counter")
const runT2 = qs(".runTask2")
var hasBeenRun = false;
var bucket = 0;
task2NumArray = [34, 5, 67, 1, 99, 34, 44, 78, 34, 0];
runT2.addEventListener("click", () => {
    if(hasBeenRun) {
        task2Counter.innerHTML = 0;
        bucket = 0;
        hasBeenRun = !hasBeenRun
    } else {
        for (let i =0; i<task2NumArray.length; i++) {
            bucket += task2NumArray[i];
        }
        task2Counter.innerHTML = bucket;
        hasBeenRun = !hasBeenRun
    }
})
// task 3
var T3CounterMain = 6;
const task3Counter = qs(".numbersLeft") || undefined
const runT3 = qs(".runTask3") || undefined
const task3Input = qs(".task3Input") || undefined
const msgField = qs(".T3message")
var numberArray = [] || undefined

runT3.addEventListener("click", ()=> {  
    if (T3CounterMain >0) {
        let data = parseInt(getValue(task3Input))
        if(isNaN(data)) {
            alert("I see you are cheeky")
        } else {
            numberArray.push(data)
            T3CounterMain--;
            task3Counter.innerHTML = T3CounterMain;
        }
        if (T3CounterMain ===0) {
            task3Input.disabled = true
            let popped = numberArray.pop();
            if (numberArray.indexOf(popped) != -1) {
                msgField.textContent = `${popped}  is a duplicated`
            } else {
                msgField.textContent = `${popped}  is not a duplicated`

            }
        }
    }
})

// task 4 
var T4CounterMain = 6;
const task4Counter = qs(".numbersLeftT4") || undefined
const runT4 = qs(".runTask4") || undefined
const task4Input = qs(".task4Input") || undefined
const newMsgField = qs(".T4message")
var numbrArray = [];

runT4.addEventListener("click", ()=> {  
    if (T4CounterMain >0) {
        let data = parseInt(getValue(task4Input))
        if(isNaN(data)) {
            alert("I see you, you are cheeky")
        } else {
            numbrArray.push(data)
            T4CounterMain--;
            task4Counter.innerHTML = T4CounterMain;
        }
        if (T4CounterMain ===0) {
            task4Input.disabled = true
            var popped = numbrArray.pop();
            var numOccurences = cheekyArrayMethod(numbrArray, popped)
            newMsgField.innerHTML = `${popped} occurs ${numOccurences} times`
            
        }
        task4Input.value = "";
    }
})

// task 5 
const T5Input = qs(".textInputT5");
const T5Run = qs(".task5Submit");
const T5TextItem = qs(".textT5");
const T5Text = [];

T5Run.addEventListener("click", ()=> {
    let data = getValue(T5Input);
    if(data.toUpperCase() === "STOP") {
        // I cannot be bothered writing my own algorithm to reverse an array when javascript has one built in 
        let revArr = T5Text.reverse();
        T5TextItem.textContent = revArr
        T5Input.disabled = true;
    } else {
        T5Text.push(data)
    }
    T5Input.value = ""
})
