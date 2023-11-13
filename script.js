const list = document.querySelector('#list')
const input = document.querySelector('#input')
const btn = document.querySelector('#addTodo')

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        completed: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        completed: true
    }]
const handleUpDate = () => {
    list.innerHTML = `
${todos.map(todo => {
        return `<li>
<input type="checkbox" ${todo.completed ? 'checked' : ''}/>
<span>${todo.text}</span>
</li>
    `
    }).join('')
    }`
    if(todos.length>=10) {
        btn.remove('hidden')
    }
}


btn.addEventListener('click', () => {
    if (input.value.length === 0) {
        alert('Ошибкаaaa!')
    } else {
        let obj = {
            id: todos.length + 1,
            text: input.value,
            completed: false
        }
        if(obj.completed===false) {
            obj.completed=true
        }
        console.log(todos)
        todos.push(obj)

        input.value = ''
        return handleUpDate()
    }
})
handleUpDate()

