<template>
  <div>
    <div class="todo-footer">
      <label>
        <input type="checkbox" v-model="isSelectAll">
      </label>
      <span>
        <span>已完成{{ finishedCount }}件 </span> /共计{{ todos.length }}件
      </span>
      <button class="btn btn-warning" @click="deleteFinishedF">
        清除已完成任务
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Footer',
    props: {
      todos: Array,
      isSelectAllF: Function,
      deleteFinishedF: Function
    },
    computed: {
      finishedCount() {
        return this.todos.reduce((total, todo) => total + (todo.finished? 1 : 0), 0)
      },
      isSelectAll: {
        get() {
          return this.finishedCount === this.todos.length
        },
        set(isChecked) {
          this.isSelectAllF(isChecked)
        }
      }
    }
  }
</script>

<style>
  /* footer */
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
  }
  
  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }
  
  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
  }
  
  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
