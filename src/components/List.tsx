import { useSelector } from 'react-redux';
import Task from './Task';
import { selectAllTask } from '../Store/Slices/TaskSlice';
import { taskType } from '../types/types';
import { useEffect } from 'react';

function List() {
  const list: taskType[] = useSelector(selectAllTask);
  // since we are getting the list here i set useEffect to check it if it is the same as before , if not we register it in local storage
  useEffect(() => {
    const register = localStorage.getItem('list');
    if (register !== JSON.stringify(list))
      localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  return (
    <ul className="max-width flex flex-col gap-2 mt-20">
      {list.map((task) => (
        <Task task={task} key={task.id} />
      ))}
      {(!list || list.length === 0) && (
        <h1 className="text-[1.5rem] font-semibold text-center">
          No Todo to do <span className="text-[#D3A121]">{':)'}</span>
        </h1>
      )}
    </ul>
  );
}

export default List;
