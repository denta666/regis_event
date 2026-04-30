interface labelinput {
    text: string;
    title: string;

}

const LabelInput: React.FC<labelinput> = ({ text, title }) => {
    return <label htmlFor={text} className="text-semibold text-sm">
        {title}
    </label>;
};

export default LabelInput;
