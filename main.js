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

const todos = [
    {
        id: 1,
        name: 'Learn JavaScript',
        completed: false,
        createdAt: new Date(),
    },
    {
        id: 2,
        name: 'Become a FrontEnd master',
        completed: false,
        createdAt: new Date(2022, 5, 1)
    },
    {
        id: 3,
        name: 'Clean my room',
        completed: true,
        createdAt: new Date(2022, 11, 1),
    }
]

const todoListEl = document.querySelector('#todoList')

const render = () => {
    for (const todo of todos) {
        const liEl = document.createElement('li')

        const checkboxEl = document.createElement('input')
        checkboxEl.type = 'checkbox'
        const labelEl = document.createElement('label')
        labelEl.textContent = todo.name
        labelEl.prepend(checkboxEl)
        liEl.append(labelEl)

        const dateEl = document.createElement('span')
        dateEl.textContent = todo.createdAt.toLocaleString()
        liEl.append(dateEl)

        todoListEl.append(liEl)
    }
}

render()