<template>
  <div>
    <li @mouseenter="showBtn(true)" @mouseleave="showBtn(false)" :style="{ backgroundColor: bgColor }">
      <label>
        <input type="checkbox" v-model="todo.finished" />
        <span>{{ todo.title }}</span>
      </label>
      <button class="btn btn-warning" v-show="isShowBtn" @click="delItems">
        删除
      </button>
    </li>
  </div>
</template>

<script>
  export default {
    name: 'Items',
    data() {
      return {
        isShowBtn: false,
        bgColor: '#fff'
      }
    },
    methods: {
      showBtn(isShow) {
        this.isShowBtn = isShow,
          this.bgColor = isShow ? '#ccc' : '#fff'
      },
      delItems() {
        if (window.confirm(`您确定删除 ${this.todo.title} 吗？`)) {
          this.deleteTitle(this.index)
        }
      }
    },
    props: {
      todo: Object,
      deleteTitle: Function,
      index: Number
    }
  }
</script>

<style>
  /* item */
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    padding: 2px 8px;

  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
