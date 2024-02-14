import { HiArrowRight } from "react-icons/hi";
import useMoveBack from "../hooks/useMoveBack";

const NotFound = () => {
const moveBack = useMoveBack();
  return (
    <div className="sm:max-w-sm flex justify-center pt-10">
      <div>
        <h1 className="text-xl font-bold text-secondary-700 mb-8">
          صفحه ای که دنبالش بودید ، پیدا نشد
        </h1>
        <button
          className="flex items-center gap-x-3"
          onClick={moveBack}>
          <HiArrowRight className="w-6 h-6 text-primary-900" />
          <span>بازگشت</span>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
