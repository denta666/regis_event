import type { ChangeEvent } from "react";
import type { FieldValues, Path } from "react-hook-form";

interface SelectOption {
    label: string;
    value: string;
}

interface InputSelectEventProps<T extends FieldValues> {
    label: string;
    name: Path<T>;
    options: SelectOption[];
    placeholder?: string;
    register: any;
    setValue: any;
    error?: string;
}

const InputSelectEvent = <T extends FieldValues>({
    label,
    name,
    options,
    register,
    setValue,
    error,
    placeholder = "Pilih kategori event",
}: InputSelectEventProps<T>) => {

    return (
        <div className="space-y-1.5">
            <label htmlFor={name} className="text-sm font-semibold text-slate-700">
                {label}
            </label>
            <select
                id={name}
                defaultValue=""
                {...register(name, {
                    onChange: (event: ChangeEvent<HTMLSelectElement>) =>
                        setValue(name, event.target.value as T[Path<T>], { shouldValidate: true }),
                })}
                className={`w-full rounded-xl border px-3 py-2.5 text-sm text-slate-800 outline-none transition-all
                ${error
                        ? "border-rose-400 bg-rose-50 focus:border-rose-500 focus:ring-2 focus:ring-rose-100"
                        : "border-slate-200 bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                    }`}
            >
                <option value="" disabled>
                    {placeholder}
                </option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>

            {error && <p className="text-xs text-rose-600">{error}</p>}
        </div>
    );
};

export default InputSelectEvent;