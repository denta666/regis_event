import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface CollapseProps {
  title: string;
  description: string;
}

const Collapse: React.FC<CollapseProps> = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="border-2 border-pink-200 bg-white rounded-xl shadow-[4px_4px_0px_#fee3ec] overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer w-full px-5 py-5 flex items-center gap-3 text-left"
      >
        <div className="p-2 bg-gray-100 rounded-lg">
          <ChevronDown
            size={20}
            className={`text-gray-600 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>

        <span className="text-base font-medium text-gray-700">
          {title}
        </span>
      </button>

      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-40 px-5 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-gray-500 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Collapse;