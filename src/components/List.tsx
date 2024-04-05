import { useSelector } from 'react-redux';
import Task from './Task';
import { selectAllTask } from '../Store/Slices/TaskSlice';
import { taskType } from '../types/types';

function List() {
  const list: taskType[] = useSelector(selectAllTask);
  return (
    <ul className="max-width flex flex-col gap-2 mt-20">
      {list.map((task) => (
        <Task task={task} key={task.id} />
      ))}
    </ul>
  );
}

export default List;
