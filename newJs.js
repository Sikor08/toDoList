const createFormEl = document.querySelector('#createForm');
const todoListEl = document.querySelector('#todoList');
const addBtn = document.querySelector('#addBtn');
const filterCompletedBtn = document.querySelector('#filtercompleted');


const createTodo = (name, completed = false) => {
    return {
        id: crypto.randomUUID(),
        name,
        completed,
        createAt: new Date
    }
}
/**
 * Функция блокирует/разблокирует кнопку Add при пустом/заполненном поле ввода
 */
const addDisEn = () => {
    addBtn.setAttribute('disabled', '');
    const inputField = document.querySelector('.notePad__input');
    inputField.addEventListener('input', () => {
        if(inputField.value != ''){
            addBtn.removeAttribute('disabled')
        } else {
            addBtn.setAttribute('disabled', '')
        }
    })
}


const todos = [
  createTodo('Go shoping'),
  createTodo('Go to Jim', true),
  createTodo('Clean room', true),
//   createTodo('Dog walking', true)

];

const render = () => {
    todoListEl.innerHTML = '';
    addBtn.textContent = `Add ${todos.length + 1}-th`

    for(let todo of todos){
        
        const liEl = document.createElement('li');
        
        if(todo.completed){
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
        labelEl.textContent = todo.name;
        labelEl.prepend(checkBoxEl)
        liEl.append(labelEl)

        const dateEl = document.createElement('span');
        dateEl.textContent = todo.createAt.toLocaleString();
        liEl.append(dateEl)

        const delBtn = document.createElement('button');
        delBtn.textContent = 'Удалить';
        delBtn.classList.add('delBtn')
        liEl.append(delBtn);
        delBtn.addEventListener('click', () => {
            const id = todo.id;
            const index = todos.findIndex(item => item.id === id);
            todos.splice(index, 1);
           render()
        })

        todoListEl.append(liEl);
        
        filterCompletedBtn.addEventListener('click', (e) => {
            if(todo.completed){
                liEl.classList.toggle('invisible');
            
            }
        })
      
    }
}

createFormEl.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(createFormEl);
    const name = formData.get('todoName');
    todos.push(createTodo(name));
    render();
    createFormEl.reset();
    addDisEn()
})
addDisEn()
render()

// const filterCompletedArr = []


