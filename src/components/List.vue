<template>
  <div>
    <ul class="todo-main">
      <Items 
      v-for="(todo, index) in todos" :key=index
      :todo="todo" :deleteTitle="deleteTitle" :index="index"
      />
    </ul>
  </div>
</template>

<script>
  import Items from './Items.vue'
  export default {
    name: 'List',
    props: {
      todos: Array,
      deleteTitle: Function
    },
    components: {
      Items
    }
  }
</script>

<style>
  /* main */
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0;
  }
  
  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>
