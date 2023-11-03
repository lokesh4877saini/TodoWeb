const todoform = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']"); 
const todoList = document.querySelector(".todo-list");
console.log(todoInput);
todoform.addEventListener("submit",(e)=>{
    e.preventDefault(); // preventDefault stop to refresh the page
    const newTodoText = todoInput.value; // for printing value of input field
    const newLi = document.createElement("li");
    const newLiInnerHtml = 
    `
    <span class="text">${newTodoText}</span>
        <div class="todo-buttons">
                <button class="todo-btn done">Done</button>
                <button class="todo-btn Remove">Remove</button>
        </div>`;
    newLi.innerHTML = newLiInnerHtml;
    todoList.append(newLi);
    todoInput.value = ""; // to remove input field text after enter the value
})
todoList.addEventListener("click",(e)=>{
    // check if user clicked on done button
    if(e.target.classList.contains("Remove")){
        const targetedLi = e.target.parentNode.parentNode;
        console.log(targetedLi);
        targetedLi.remove();
    }
    if(e.target.classList.contains("done")){
        const liSpan = e.target.parentNode.previousElementSibling ;
        liSpan.style.textShadow= "5px 4px 1px black";
        liSpan.style.textDecoration = "line-through";
    }
})