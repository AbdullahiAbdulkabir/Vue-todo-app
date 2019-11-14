<template>
	<div class="well well-lg col-md-4 col-md-offset-4" >
	<span :class="{ 'completed': todo.completed }">
	<span class="glyphicon glyphicon-ok" aria-hidden="true" @click="markComplete"></span>
	  <span  >{{todo.title}}</span>
	</span>
	<span class="glyphicon glyphicon-remove" aria-hidden="true" @click="$emit('delete-todo', todo.id)"></span>
	  
	</div>
</template>

<script>
export default {
  name: 'Todo',
  props: ['todo'],
  methods: {
    markComplete() {
      this.todo.completed = !this.todo.completed
    }
  }
  

  }
  </script>
  <style >
  .completed {
    text-decoration: line-through;

  }
  div .well{
  background-color: #42474a;
  color:white;
  border: 0px;
  font-family: Avenir;
  }
</style>