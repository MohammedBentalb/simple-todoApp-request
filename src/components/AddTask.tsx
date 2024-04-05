import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../Store/Slices/TaskSlice';

function AddTask({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!value.trim()) return;
    dispatch(addTask(value));
    setIsOpen(false);
  };
  return (
    <>
      <div
        className="absolute inset-0 bg-black/20"
        onClick={() => setIsOpen(false)}
      ></div>
      <form
        className="absolute w-[400px] left-1/2 -translate-x-1/2 top-20 rounded z-50 bg-gray-300 py-4 px-2 flex flex-col items-center gap-3"
        method="POST"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center text-[1.5rem] font-semibold capitalize">
          Add new Task
        </h1>
        <input
          type="text"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="rounded outline-[#D3A121]"
        />
        <input
          type="submit"
          value={'submit'}
          className=" bg-[#D3A121] px-5 py-1 rounded hover:text-black border border-transparent hover:bg-transparent hover:border-black transition-all duration-200 ease-in-out cursor-pointer"
        />
      </form>
    </>
  );
}

export default AddTask;
