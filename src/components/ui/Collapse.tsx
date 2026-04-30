import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface CollapseProps {
  title: string;
  description: string;
}

const Collapse: React.FC<CollapseProps> = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 flex items-center justify-between hover:bg-pink-300"
      >
        <span>{title}</span>
        <ChevronDown
          size={18}
          className={`text-gray-600 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="p-4 border-t text-gray-700">
          {description}
        </div>
      )}
    </div>
  );
};

export default Collapse;