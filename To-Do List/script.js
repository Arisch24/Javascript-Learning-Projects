const submitBtn = document.querySelector("#submit-btn");
const todo = document.querySelector("#todo");
const todoList = document.querySelector("#todo-list");

// Append element li to ul tag
submitBtn.addEventListener("click", e=>{
    e.preventDefault();
    /* My error was inserting the li element outside the event listener function(line 11)
    e.g:onto line 4. Putting the line outside only continues the li text. 
    For example: 
    1st input: • take out trash
    2nd input: • clean room
    Output: • take out trashclean room */

    /* Two ways to do this:
    1. My way
    li.innerHTML = todo.value;
    li.appendChild(li);

    2. Using createTextNode
    const todoValue = document.createTextNode(todo.value);
    li.appendChild(todoValue);
    */

    const li = document.createElement("li");
    const todoValue = document.createTextNode(todo.value);
    li.appendChild(todoValue);
    todoList.appendChild(li);
    todo.value = "";// reset the input value
});