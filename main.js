// App Data Model

/*
  type Todo = {
    id: number
    name: string
    completed: boolean
    createdAt: Date
  }

  Array<Todo>
*/

// App State

const createFormEl = document.querySelector('#createForm');
const todoListEl = document.querySelector('#todoList');

const createTodo = (name, completed) => {
    return {
        name,
        completed,
        id: crypto.randomUUID(),
        createdAt: new Date()
    }

}

const todos = [
    createTodo('Go shoping', false),
    createTodo('Dog walking', false),
    createTodo('Clean room', true),
]

const render = () => {
    todoListEl.innerHTML = ''
    for (const todo of todos) {
        const liEl = document.createElement('li');
        if (todo.completed) {
            liEl.classList.add('completed')
        }

        const checkBoxEl = document.createElement('input');
        checkBoxEl.type = 'checkbox';
        checkBoxEl.checked = todo.completed;

        checkBoxEl.addEventListener('input', () => {
            todo.completed = !todo.completed
            render()
        })

        const labelEl = document.createElement('label');
        labelEl.textContent = todo.name
        labelEl.prepend(checkBoxEl);
        liEl.append(labelEl);

        const dateEl = document.createElement('span');
        dateEl.textContent = todo.createdAt.toLocaleString()
        liEl.append(dateEl)
        todoListEl.append(liEl);

        const delBtn = document.createElement('button');
        delBtn.classList.add('delBtn')
        delBtn.textContent = 'Delete';

        delBtn.addEventListener('click', () => {
            const id = todo.id
            const index = todos.findIndex(item => item.id === id)
            todos.splice(index, 1)
            render()
        })
        liEl.append(delBtn);
    }
}

createFormEl.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(createFormEl);
    const name = formData.get('todoName');
    todos.push(createTodo(name));
    render();
    createFormEl.reset()
    console.log(todos)
})

render()

// todos id

// const nameToDelete = 'John'
// const names = ['Alice', 'Bob', 'John'];

// const index = names.indexOf(nameToDelete)
// names.splice(index, 1)

// console.log(names)

// const nameToDelete = 'John'
// const users = [{ name: 'Alice' }, { name: 'Bob' }, { name: 'John' }];

// const index = users.findIndex(user => user.name === nameToDelete)
// users.splice(index, 1)

// for (let index = 0; index < users.length; index++) {
//     const currentUser = users[index]
//     if (currentUser.name === nameToDelete) {
//         users.splice(index, 1)
//     }
// }

// const index = users.indexOf(nameToDelete)
// console.log({ index })
// users.splice(index, 1)

// console.log(users)
// console.log(users.map(user => user.name))

// linear search
// for (let index = 0; index < names.length; index++) {
//     const currentName = names[index]
//     if (currentName === nameToDelete) {
//         names.splice(index, 1)
//     }
// }