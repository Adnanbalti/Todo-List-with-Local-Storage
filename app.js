const inputText = document.getElementById('inputText');
const itemList = document.getElementById('itemList');

function addHandler() {
    if (inputText.value === '') {
        alert('You must write something');
    }
    else {
        let item = document.createElement('li');
        item.innerHTML = inputText.value;
        itemList.appendChild(item);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        item.appendChild(span);
    }
    inputText.value = '';
    saveData();
}

itemList.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

inputText.addEventListener('keydown', function(e) {
    if (e.key === "Enter") {
        addHandler();
    }
})

function saveData(){
    localStorage.setItem('data', itemList.innerHTML);
}

function loadData(){
    itemList.innerHTML = localStorage.getItem('data');
}

loadData();
