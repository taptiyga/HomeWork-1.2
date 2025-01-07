// Ищем элементы на странице
const formInput = document.querySelector('#formInput')
const list = document.querySelector('#list')
const buttonAdd = document.querySelector('#buttonAdd')
const buttonDel = document.querySelector('#buttonDel')

// Добавляем задачу
buttonAdd.addEventListener('click', (event) => {
    //отменяем перезагрузку страницы
    event.preventDefault()
    //достаем текст задачи из поля ввода
    const inputText = formInput.value
    //проверка на наличие текста в поле
    if (inputText != "") {
        //формирует элемент списка
        const inputHTML = `<li class="item">${inputText}</li>`
        //добавляем элемент списка и выводим на страницу
        list.insertAdjacentHTML('afterbegin', inputHTML)
    }
    //очищаем поле после добавления
    formInput.value = ''
    //возвращаем фокус в поле ввода
    formInput.focus()
})
//удаляем все элементы списка
buttonDel.addEventListener('click', () => {
    list.innerHTML = ""
})