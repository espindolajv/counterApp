const label = document.getElementById('count-label')
const addBtn = document.getElementById('btn-add')
const removeBtn = document.getElementById('btn-remove')
const resetBtn = document.getElementById('btn-reset')

let counter = 0

addBtn.onclick = () => {
    counter++
    label.textContent = counter
}

removeBtn.onclick = () => {
    counter--
    label.textContent = counter
}


resetBtn.onclick = () => {
    counter = 0
    label.textContent = counter
}