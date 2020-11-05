<template>
  <div id="app">
    <div id="root">
      <div class="todo-container">
        <div class="todo-wrap">
          <!-- <Header :addTodo="addTodo" /> -->
          <Header @addTodo="addTodo" />
          <List :todos="todos" :deleteTitle="deleteTitle" />
          <Footer 
          :todos="todos" 
          :isSelectAllF="isSelectAllF" 
          :deleteFinishedF="deleteFinished" 
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import List from './components/List.vue'
  import Footer from './components/Footer.vue'

  // 引入数据
  import localStorageUtil from './util.js'

  export default {
    name: 'App',
    data() {
      return {
        todos: localStorageUtil.readTodos()
        // todos: [
        //   {title: 'my', finished: false}
        // ]
      }
    },
    mounted() {
      console.log(this.todos)
    },
    updated() {
      console.log(this.todos)
    },
    components: {
      Header,
      List,
      Footer
    },
    methods: {
      deleteTitle(index) {
        this.todos.splice(index, 1)
      },
      addTodo(todo) {
        this.todos.unshift(todo)
      },
      isSelectAllF(checked) {
        this.todos.forEach(todo => {
          todo.finished = checked
        })
      },
      deleteFinished() {
        this.todos = this.todos.filter(todo => !todo.finished)
      }
    },
    watch: {
      todos: {
        hander: function(newVal, oldVal){
          console.log('oldVal:',oldVal)
          console.log('newVal:',newVal)
          localStorageUtil.saveTodos
        },
        deep: true,   //todos里面每个对象属性都能监视到
        immediate: true  //首次绑定的时候是否执行watch
      }
    }
  }
</script>

<style>
  /* app */
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }

  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
