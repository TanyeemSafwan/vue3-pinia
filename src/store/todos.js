import { defineStore } from "pinia";

export const useTodosStore = defineStore("todos", {
  state: () => ({
    todos: [
      {
        id: 1,
        text: 'Clean Room',
        isFinished: false
      }
    ],
    filter: 'All'
  }),
  getters: {
    filteredTodos() {
      if (this.filter === 'Finished') {
        return this.todos.filter(todo => todo.isFinished);
      } else if (this.filter === 'Unfinished') {
        return this.todos.filter(todo => !todo.isFinished);
      }
      return this.todos;
    }
  },
  actions:{
    addTodo(text) {
      if (!text) return;
      this.todos.push({
        id: Math.floor(Math.random() * 100000000000000),
        text,
        isFinished: false
      })
    },
    toggleTodo(id) {
      const index = this.todos.findIndex((todos) => todos.id ===id);
      this.todos[index].isFinished = !this.todos[index].isFinished;
    },
    updateFilter(text) {
      this.filter = text;
    }
  } 
})