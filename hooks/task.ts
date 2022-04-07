import create, { StateCreator } from "zustand";
import { devtools, persist, PersistOptions } from "zustand/middleware";
import { TaskStore } from "../types";

interface ITaskStore {
  todos: TaskStore[];
  filteredTodos: TaskStore[];
  filteredTodosLen: number;
  addTodos: (data: TaskStore) => void;
  removeTodo: (id: string) => void;
  toggleChecked: (id: string) => void;
  filterTodos: (color: string) => void;
  resetFilterTodos: () => void;
}

type MyPersist = (
  config: StateCreator<ITaskStore>,
  options: PersistOptions<ITaskStore>
) => StateCreator<ITaskStore>;

export const useTaskStore = create<ITaskStore>(
  devtools(
    (persist as MyPersist)(
      (set) => ({
        todos: [],
        filteredTodos: [],
        filteredTodosLen: 0,

        addTodos: (todo) =>
          set((state) => {
            const todos = [todo, ...state.todos];
            const isMatchColor = [...state.filteredTodos].some(
              (tdo) => tdo.colorTag === todo.colorTag
            );
            const filteredTodos = isMatchColor
              ? [todo, ...state.filteredTodos]
              : [...todos];
            return {
              todos,
              filteredTodos,
              filteredTodosLen: filteredTodos.length,
            };
          }),

        filterTodos: (selectedColor) =>
          set((state) => {
            const filtered = [...state.todos].filter(
              (todo) => selectedColor === todo.colorTag
            );
            return {
              ...state,
              filteredTodos: filtered,
              filteredTodosLen: filtered.length,
            };
          }),

        resetFilterTodos: () =>
          set((state) => ({
            ...state,
            filteredTodos: state.todos,
            filteredTodosLen: [...state.todos].length,
          })),

        toggleChecked: (idx) =>
          set((state) => {
            const toggledTodo = [...state.todos].map((todo) => ({
              ...todo,
              ...(todo.id === idx && { isDone: !todo.isDone }),
            }));
            const toggledFilterTodo = [...state.filteredTodos].map((todo) => ({
              ...todo,
              ...(todo.id === idx && { isDone: !todo.isDone }),
            }));
            return {
              todos: toggledTodo,
              filteredTodos: toggledFilterTodo,
            };
          }),

        removeTodo: (idx) =>
          set((state) => ({
            todos: [...state.todos].filter((todo) => todo.id !== idx),
          })),
      }),
      {
        name: "todo_task",
      }
    )
  )
);
