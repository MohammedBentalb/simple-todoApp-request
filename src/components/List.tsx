import { useSelector } from 'react-redux';
import Task from './Task';
import { selectAllTask } from '../Store/Slices/TaskSlice';
import { taskType } from '../types/types';
import { useEffect } from 'react';

function List() {
  const list: taskType[] = useSelector(selectAllTask);
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
