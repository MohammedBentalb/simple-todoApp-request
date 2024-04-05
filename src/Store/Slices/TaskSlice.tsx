import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { taskType } from '../../types/types';
import { RootType } from '../Store';

// self running function to get data from local storage if any
const initialState: taskType[] = (() => {
  const list = localStorage.getItem('list');
  if (!list) return [];
  return JSON.parse(list) as taskType[];
})();

// since it's a simple todo app and function are quite simple i choose to create all function in this slice instead of making other slices
const taskManager = createSlice({
  name: 'taskManager',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      const task = {
        completed: false,
        id: nanoid(),
        title: action.payload,
      };
      state.push(task);
    },
    removeTask: (state, action: PayloadAction<string>) => {
      const taskIndex = state.findIndex((task) => task.id === action.payload);
      if (taskIndex === -1) return;
      state.splice(taskIndex, 1);
    },
    toggleComplete: (state, action: PayloadAction<string>) => {
      const foundItem = state.find((task) => task.id === action.payload);
      if (!foundItem || Object.keys(foundItem).length === 0) return;
      foundItem.completed = !foundItem.completed;
    },
  },
});

// I created this here so that if we ever needed to change the structure of how we get the tasks we change it once here and it changes in all places where it's been used
export const selectAllTask = (state: RootType) => state.taskManager;

export const { addTask, removeTask, toggleComplete } = taskManager.actions;
export default taskManager.reducer;
