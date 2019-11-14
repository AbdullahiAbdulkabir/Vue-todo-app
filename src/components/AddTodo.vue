<template>
  <div class="">
    <form @submit="addTodo" class="form-inline ">

      <input  class="form-control" type="text" v-model="title" placeholder="what did you want to do?" name="title" required>

      
    </form>
  </div>
</template>

<script>
import uuid from 'uuid'
export default {
  name: 'AddTodo',
  data() {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    addTodo(e) {
      e.preventDefault();
      const newTodoObj = {
        id: uuid.v4(),
        title: this.title,
        
        completed: false
      }
      
      this.$emit('add-todo', newTodoObj);
      this.title = '';
    }
  }
}
</script>
<style >
.form-inline input{
  background-color: #363a3d;
  border-color: #2e94a7;
  color:white;
  padding: 24px; 
}

</style>