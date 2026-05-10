import type { FieldValues, Path } from "react-hook-form";

interface TextareaProps<T extends FieldValues> {
    label: string;
    name: Path<T>;
    placeholder: string;
    register: any;
    error?: string;
}

const Textarea = <T extends FieldValues>({
    label,
    name,
    placeholder,
    register,
    error,
}: TextareaProps<T>) => {
    return (
        <div className="space-y-1.5">
            <label htmlFor={name} className="text-sm font-semibold text-slate-700">
                {label}
            </label>
            <textarea
                id={name}
                {...register(name)}
                placeholder={placeholder}
                rows={4}
                className={`w-full resize-none rounded-xl border px-3 py-2.5 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400
                ${error
                        ? "border-rose-400 bg-rose-50 focus:border-rose-500 focus:ring-2 focus:ring-rose-100"
                        : "border-slate-200 bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                    }`}
            />
            {error && <p className="text-xs text-rose-600">{error}</p>}
        </div>
    );
};

export default Textarea;      