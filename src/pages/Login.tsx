import Forminput from "../components/ui/Forminput";
import { zodResolver } from "@hookform/resolvers/zod";
import {z} from "zod";
import { useForm } from "react-hook-form";
import Button from "../components/ui/Button";

// schema validasi form login
const schema = z.object({
    email: z.string().min(1, "email harus diisi"),
    password: z.string().min(8, "password harus memiliki minimal 8 karakter")
});

export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema)
    });

    return (
        <div>
            <form onSubmit={handleSubmit((data) => console.log(data))}>
                <div className="flex flex-col gap-1">
                    <Forminput text="email" tipe="text" name="email" register={register} error={errors.email?.message} />

                    <Forminput text="password" tipe="password" name="password" register={register} error={errors.password?.message} />
                    
                </div>

                <div>
                    <Button label="Login" variant="primary"/>
                </div>

                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}