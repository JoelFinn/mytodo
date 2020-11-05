const MY_TODOS = 'myTodos'
export default {
  readTodos() {
    return JSON.parse(localStorage.getItem(MY_TODOS) || '[]')
  },
  saveTodos(todos) {
    localStorage.setItem(MY_TODOS, JSON.stringify(todos))
  }
}
