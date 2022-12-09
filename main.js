/**dom elems */
let input = document.querySelector('.notePad__input');
let addBtn = document.querySelector('.notePad__btn');
let toDoList = document.querySelector('.toDoList');


/**variables */
let genId = 100;
// let itemCounter = 0;

// Всегда свежая дата
let date = new Date().toJSON().slice(0,10).replace(/-/g,'/');
let noteHeading = document.querySelector('.notePad__heading');
noteHeading.insertAdjacentHTML('beforeend', date)

// -------------------------------------------------------------



/** 
 * diabling button when input-field empty
*/
input.addEventListener('input', (e) => {
    input.value !== ''? addBtn.removeAttribute('disabled'): addBtn.setAttribute('disabled', '')
}) 
/**
 * 
 * @returns lauout
 */
let render = () =>{
    return `<li class="toDoListItem" data-id=${genId}> 
    <div class="toDoListItem__check">
        <input class="toDoListItem__checkbox" type="checkbox">
        <span class="toDoListItem__itemCounter">-</span>
    </div>
    <p class="toDoListItem__title">${input.value}</p>
    <button type="button" class="btn-close toDoListItem__delBtn" aria-label="Close" data-id="${genId}"></button>
</li>
`
}

/** 
 * click handler
 */
addBtn.addEventListener('click', () => {
    genId +=10 //Увеличиваем счётчик id

    toDoList.classList.remove('hidden'); // 
    toDoList.insertAdjacentHTML('beforeend', render()); // вставляем вёрстку
    let actItems = document.querySelectorAll('.toDoListItem');
    actItems.forEach(item => {
        item.classList.add('toDoListItemAppear')
    })

    input.value = ''; // очищаем инпут
    addBtn.setAttribute('disabled', '') // блокируем кнопку
    // itemCounter +=1
    let AllBtnsClose = document.querySelectorAll('.btn-close');
    AllBtnsClose.forEach(btn => {
        btn.addEventListener('click', () => {
            // itemCounter -=1
            actItems.forEach(item => {
                if(item.getAttribute('data-id') == btn.getAttribute('data-id')){
                    item.classList.add('swirl-out-bck')
                    setTimeout(() => {
                        item.remove()
                    },'1000');
                    
                }
            })
        })
    })
    })
    

