import { useDispatch } from 'react-redux';
import { taskType } from '../types/types';
import { toggleComplete } from '../Store/Slices/TaskSlice';

function Task({ task }: { task: taskType }) {
  const dispatch = useDispatch();
  const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
    event.stopPropagation();
    dispatch(toggleComplete(task.id));
  };
  return (
    <li className="w-fit flex gap-2 hover:scale-[1.2] transition-transform duration-150 ease-in-out">
      <input
        type="checkbox"
        name="completed"
        id={`task number ${task.id}`}
        className="accent-[#D3A121] text-white h-5 max-w-5 min-w-5"
        checked={task.completed}
        onClick={handleClick}
        readOnly
      />
      <label
        htmlFor={`task number ${task.id}`}
        className={`flex gap-2 items-start cursor-pointer w-full ${
          task.completed ? 'line-through' : ''
        }`}
      >
        {task.title}
      </label>
    </li>
  );
}

export default Task;
