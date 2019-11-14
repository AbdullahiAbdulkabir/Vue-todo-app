<template>
  <div id="app">
  <h2>Todo Lists </h2>  
     <AddTodo v-on:add-todo="addTodo" /> <br/>
    <Todos :todols="todos" v-on:delete-todo="deleteTodo"/> 
  
  </div>
</template>

<script>
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

export default {
  name: 'app',
  
  data () {
    return {
      todos: [
      {

      id: 1,
      title: "Learn Laravel",
      
      completed: false
      },
      {
      id: 2,
      title: "Contribute to Google maps",
    
      completed: false
      },
      {
      id: 3,
      title: "Attend one meetup",
      
      completed: false
      }
      ],
      msg: 'Welcome to my Todo App'
    }
  },

  components:{ Todos, AddTodo},
   methods: {
    addTodo(newTodoObj) {
      this.todos = [...this.todos, newTodoObj];
    },
    deleteTodo(todoId) {
      this.todos = this.todos.filter(todo => todo.id !== todoId);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}

h1, h2 {
  font-weight: normal;
  font-family: Avenir;
  color: #fff;
  border-bottom: 3px solid #2e94a7;
  width:50px;
}


</style>
