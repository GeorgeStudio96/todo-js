const todoControl = document.querySelector('.todo-control')
const headerInput = document.querySelector('.header-input')
const todoList = document.querySelector('.todo-list')
const todoCompleted = document.querySelector('.todo-completed')



const todoData = []


const renderTodo = function () {
    todoList.innerHTML = ''
    todoCompleted.innerHTML = ''

    todoData.forEach(function (item, index) {


        const newElem = document.createElement('li')
        newElem.classList.add('todo-item')
        newElem.innerHTML = '<span class="text-todo">' + item.text + '</span>' + '<div class="todo-buttons">' +
            '<button class="todo-remove"></button>' +
            '<button class="todo-complete"></button>' +
            '</div >'

        if (item.completed == false) {
            todoList.append(newElem)
        } else {
            todoCompleted.append(newElem)
        }

        newElem.querySelector('.todo-complete').addEventListener('click', function () {
            item.completed = !item.completed // меняю св-во competed на противоположное
            renderTodo()
        })

    })

}


todoControl.addEventListener('submit', function (e) {
    e.preventDefault()

    const newTodo = {
        text: headerInput.value,
        completed: false
    }

    todoData.push(newTodo)
    renderTodo()
    headerInput.value = ''

})