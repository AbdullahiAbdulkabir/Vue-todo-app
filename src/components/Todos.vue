<template>
 <div >

<Todo :todo="todo" v-bind:key="todo.id" v-on:delete-todo="$emit('delete-todo', todo.id)" v-for="todo in todols"></Todo>
 </div>
</template>

<script>

import Todo from './Todo'
export default {
  name: 'Todos',
  components:{Todo},
  props: ['todols']

  }
  </script>
  <style>
  .left{
  border-right: 5px solid #42474a;
  }
  </style>