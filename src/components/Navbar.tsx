import { useState } from 'react';
import AddTask from './AddTask';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="max-width flex justify-between items-center">
      <h1 className="text-[3rem] font-semibold first-letter:text-[#D3A121]">
        TodoApp
      </h1>
      <button
        className="bg-[#D3A121] px-5 py-2 border transition-all duration-200 ease-in-out border-black hover:text-[#D3A121] hover:bg-white hover:border-[#D3A121] rounded"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        Add Task
      </button>
      {isOpen && <AddTask setIsOpen={setIsOpen} />}
    </nav>
  );
}

export default Navbar;
