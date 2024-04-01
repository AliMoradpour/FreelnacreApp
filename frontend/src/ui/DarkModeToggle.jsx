import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { useDarkMode } from "../context/DarkModeContext";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

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
