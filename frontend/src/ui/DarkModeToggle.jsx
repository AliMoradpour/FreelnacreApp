import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { useDarkMode } from "../context/DarkModeContext";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button onClik={toggleDarkMode}>
      {isDarkMode ? (
        <HiOutlineSun className="w-5 h-5 text-primary-900" />
      ) : (
        <HiOutlineMoon className="w-5 h-5 text-primary-900" />
      )}
    </button>
  );
}

export default DarkModeToggle;
