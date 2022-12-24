const todoControl = document.querySelector('.todo-control') // форма 
const headerInput = document.querySelector('.header-input')
const todoList = document.querySelector('.todo-list')
const todoCompleted = document.querySelector('.todo-completed')
const todoRemove = document.querySelector('.todo-remove')


// в переменную todoItems присваивается: 
// 1) распарсенный локал стордж, который получает todo
// 2) ИЛИ пустой массив
const todoItems = JSON.parse(localStorage.getItem('todo')) || []





const rednerItem = function () {
    todoList.innerHTML = ''
    todoCompleted.innerHTML = ''

    todoItems.forEach(function (item, index) {

        const newElem = document.createElement('li')
        newElem.classList.add('todo-item')
        newElem.innerHTML = '<span class="text-todo">' + item.name + '</span>' + '<div class="todo-buttons">' +
            '<button class="todo-remove"></button>' +
            '<button class="todo-complete"></button>' +
            '</div >'

        if (item.check == false) {
            todoList.append(newElem)
        } else {
            todoCompleted.append(newElem)
        }

        newElem.querySelector('.todo-complete').addEventListener('click', function () {
            item.check = !item.check // меняю св-во competed на противоположное
            rednerItem()
        })

        newElem.querySelector('.todo-remove').addEventListener('click', function () {
            localStorage.clear();
            todoItems.splice(index, 1)
            rednerItem()
        })
    })
    localStorage.setItem('todo', JSON.stringify(todoItems))
}

todoControl.addEventListener('submit', function (e) {
    e.preventDefault();

    // create object при каждой созданной задаче
    if (headerInput.value !== '') {
        const newTodo = {
            name: headerInput.value,
            check: false
        }

        todoItems.push(newTodo)
        headerInput.value = ''
        rednerItem()
    } else {
        alert('Нельзя создать пустую задачу')
    }

})

// если массив todoItems пустой, покажу сообщение,
// иначе отрендерю элементы в соответствии с данными из localStorage
if (todoItems.length == 0) {
    console.log('Задач нет!');
} else {
    rednerItem()
}


// удаляю полностью localStorage, если там пустой массив 
if (localStorage.getItem('key') == null) {
    localStorage.clear()
}