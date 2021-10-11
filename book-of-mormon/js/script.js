const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', function() {
    let favoriteBook = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const deleteBtn = document.createElement('button');

    listItem.textContent = favoriteBook;
    deleteBtn.textContent = 'X';

    listItem.appendChild(deleteBtn);

    list.appendChild(listItem);

    deleteBtn.addEventListener('click', function(){
        list.removeChild(listItem)
        input.focus()
    });

    input.focus();
      
})
