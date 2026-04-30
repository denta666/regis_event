import InputText from "./InputText";
import LabelInput from "./labelinput";

interface FormInputProps {
  text: string;
  tipe?: string;
  name: string;
  register: any;
  error?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  text,
  tipe = "text", 
  name,
  register,
  error,
}) => {
  return (
    <div className="flex flex-col gap-1 mb-3">
      <LabelInput text={text} title={name} />

      <InputText
        tipe={tipe}
        name={name}
        {...register(name)}
        error={error}
      />

      {error && <p className="text-red-600 text-sm">{error}</p>}
    </div>
  );
};

export default FormInput;