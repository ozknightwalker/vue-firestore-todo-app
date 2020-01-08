<template>
  <div class="home">
    <TodoList />
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
    TodoList: () => import('@/components/todo/TodoList.vue'),
  },
};
</script>
