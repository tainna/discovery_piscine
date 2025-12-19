window.onload = function () {
    loadTodos();
};

function newTodo(){
    let text = prompt("New TO DO");
    if(!text)
        return;

    createTodo(text);
    saveTodos();
}

function createTodo(text){
    let div = document.createElement("div");
    div.textContent = text;

    div.onclick = function (){
        if(confirm("Remove this TO DO?"))
        {
            div.remove();
            saveTodos();
        }
    };

let list = document.getElementById("ft_list");
list.insertBefore(div, list.firstChild);
}

function saveTodos()
{
    let list = document.getElementById("ft_list");
    let todos = [];
    let children = list.children;
    let i = 0;

    while(i < children.length)
    {
        todos.push(children[i].textContent);
        i++;
    }
    document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos)) + ";path=/";
}

function loadTodos() 
{
    let cookies = document.cookie.split("; ");
    let todoCookie = cookies.find(c => c.startsWith("todos="));

    if(!todoCookie)
        return;

    let todos = JSON.parse(decodeURIComponent(todoCookie.split("=")[1]));

    todos.forEach(todo => {
        createTodo(todo);
    });
}