import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { taskType } from '../../types/types';
import { RootType } from '../Store';

const initialState: taskType[] = [
  { title: 'take the trash', completed: false, id: '1' },
  { title: 'checkout family', completed: false, id: '2' },
  { title: 'take a nap', completed: true, id: '3' },
  { title: 'walk the dog', completed: false, id: '4' },
  { title: 'take a shower', completed: true, id: '5' },
  { title: 'pray', completed: false, id: '6' },
  { title: 'read', completed: false, id: '7' },
];

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
