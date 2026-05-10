import LabelInput from "./labelinput";

interface FormInputProps {
    label : string;
    text: string;
    tipe: string;
    name: string;
    register?: any;
    error?: string;
    placeholder: string;
}

const FormInput: React.FC<FormInputProps> = ({text, tipe, name, register, error, placeholder}) =>{
    return (
        <div className="flex flex-col gap-2 mb-3">
            <LabelInput text={text} title={name} />
            <input type={tipe}
            id={name}
            {...register(name)}
            placeholder={placeholder}
            className={`border p-2 rounded-md focus:border-red-400 outline-none ${error ? "bg-red-100" : "bg-white"}`}
            />

            {error &&  <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
};

export default FormInput;