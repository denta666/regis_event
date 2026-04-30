import { ChevronDown } from "lucide-react";
import {useState} from "react";
interface CollapseProps {
    title: string;
    description: string;
}

const Collapse: React.FC<CollapseProps> = ({ title, description }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <div className="border border-gray-200 rounded-lg">
            <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer w-full p-4 flex item-center hover:bg-pink-300">
                <ChevronDown
                size={18}
                className={`text-grey-600 transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
                <span>{title}</span>
            </button>
            {isOpen && <div>{description}</div>}
        </div>
    );
};

export default Collapse;