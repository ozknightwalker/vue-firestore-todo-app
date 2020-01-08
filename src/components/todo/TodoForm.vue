<template>
  <div class="todo-form">
      <form
        ref="todoForm"
        @submit.prevent="formSubmit">
          <input
            v-model.trim="text"
            placeholder="edit me"
            minlength="1"
            maxlength="55"
            required />
          <button type="submit">
            Add Todo
          </button>
      </form>
  </div>
</template>

<script>
export default {
  name: 'TodoForm',
  data() {
    return {
      text: '',
    };
  },
  methods: {
    formSubmit() {
      if (!this.$refs.todoForm.checkValidity()) {
        return;
      }
      const payload = {
        text: this.text,
        isFinished: false,
        createdAt: new Date(),
      };
      this.$emit('submit', payload);
    },
  },
};
</script>

<style>

</style>
