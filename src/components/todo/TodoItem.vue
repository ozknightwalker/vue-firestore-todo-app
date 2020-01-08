<template>
  <div class="todo-item">
      <span>
          {{ todo.text }}
        </span>
      <span>
          <input
            type="checkbox"
            :checked="todo.isFinished"
            @click.prevent="updateTodo" />
        </span>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  computed: {},
  methods: {
    updateTodo() {
      this.$emit('tick', this.todo.id);
    },
  },
};
</script>

<style>

</style>
