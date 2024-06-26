import { useDispatch } from 'react-redux';
import { taskType } from '../types/types';
import { removeTask, toggleComplete } from '../Store/Slices/TaskSlice';

function Task({ task }: { task: taskType }) {
  const dispatch = useDispatch();
  const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
    event.stopPropagation();
    dispatch(toggleComplete(task.id));
  };
  const handleDelete = () => {
    dispatch(removeTask(task.id));
  };
  return (
    <li className="md:origin-left max-md:origin-top w-fit md:max-w-[80%] max-w-[90%] flex gap-2 hover:scale-[1.2] max-md:hover:scale-[1.05] transition-transform duration-150 ease-in-out">
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
        className={`flex gap-2 items-start cursor-pointer w-fit ${
          task.completed ? 'line-through' : ''
        }`}
      >
        {task.title}
      </label>
      <button
        role="button"
        className="font-bold border h-7 border-[#D3A121] px-2 rounded text-[#D3A121] text-[15px] hover:text-black hover:border-black transition-all duration-200 ease-in-out"
        onClick={handleDelete}
      >
        X
      </button>
    </li>
  );
}

export default Task;
