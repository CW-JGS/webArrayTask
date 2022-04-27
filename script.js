function qs(element, parent=document) {
    return parent.querySelector(element);
}
function getValue(parent) {
    // console.log(parent.value)
    return parent.value
}
const task1 = qs(".task1");
const task2 = qs(".task1");
const task3 = qs(".task1");
const task4 = qs(".task1");
const task5 = qs(".task1");
//task 1 dom manipulation
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
    } else {
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
})

// task 2 dom manipulation
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


