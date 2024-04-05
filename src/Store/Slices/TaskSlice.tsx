import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { taskType } from '../../types/types';
import { RootType } from '../Store';

// self running function to get data from local storage if any
const initialState: taskType[] = (() => {
  const list = localStorage.getItem('list');
  if (!list) return [];
  return JSON.parse(list) as taskType[];
})();

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
      const newList = state.filter((task) => task.id !== action.payload);
      state = newList;
    },
    toggleComplete: (state, action: PayloadAction<string>) => {
      const foundItem = state.find((task) => task.id === action.payload);
      if (!foundItem || Object.keys(foundItem).length === 0) return;
      foundItem.completed = !foundItem.completed;
    },
  },
});

export const selectAllTask = (state: RootType) => state.taskManager;
export const { addTask, removeTask, toggleComplete } = taskManager.actions;
export default taskManager.reducer;
