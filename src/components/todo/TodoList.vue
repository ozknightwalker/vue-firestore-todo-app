<template>
  <div class="todo-list">
      <TodoForm @submit="createTodo"/>
      <hr />
      <h2>Todos</h2>
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @tick="handleTodoTick"
        />
  </div>
</template>

<script>
import db from '@/db';

export default {
  name: 'TodoList',
  components: {
    TodoForm: () => import('./TodoForm.vue'),
    TodoItem: () => import('./TodoItem.vue'),
  },
  data() {
    return {
      todos: [],
    };
  },
  firestore() {
    return {
      todos: db.collection('todos')
        .orderBy('createdAt', 'desc'),
    };
  },
  methods: {
    createTodo(payload) {
      db.collection('todos')
        .add(payload);
    },
    handleTodoTick(todoID) {
      const item = this.todos
        .find(todo => todo.id === todoID);

      db.collection('todos')
        .doc(todoID)
        .update({
          isFinished: !item.isFinished,
        });
    },
  },
};
</script>

<style>

</style>
