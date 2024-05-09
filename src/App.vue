<script setup>
import { ref } from 'vue';
import { useTodosStore } from './store/todos';
import { storeToRefs } from 'pinia';

const useStoreTodos = useTodosStore();
const newTodo = ref('');

const { filteredTodos } = storeToRefs(useStoreTodos);
const { addTodo, toggleTodo, updateFilter } = useStoreTodos; 

const addNewTodo = (text) => {
  addTodo(text);
  newTodo.value = '';
}
</script>

<template>
  <main>
    <div>
      <button @click="() => updateFilter('All')">All</button>
      <button @click="() => updateFilter('Finished')">Finished</button>
      <button @click="() => updateFilter('Unfinished')">Unfinished</button>
    </div>
    <input v-model="newTodo"/>
    <button @click="() => addNewTodo(newTodo)">Add</button>

    <div v-for="todo in filteredTodos" :key="todo.id" style="display: flex">
      <h1 :style="todo.isFinished && { textDecoration: 'line-through' }">{{ todo.text }}</h1>
      <button @click="() => toggleTodo(todo.id)">toggle</button>
    </div>
  </main>
</template>