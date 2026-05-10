import Forminput from "../components/ui/Forminput";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import Button from "../components/ui/Button";

// Schema Validasi
const schema = z.object({
  email: z.string().min(1, "Email harus diisi"),
  password: z
    .string()
    .min(8, "Password harus memiliki minimal 8 karakter"),
});

type FormData = z.infer<typeof schema>;

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md p-6 bg-white rounded-lg shadow-md"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">
          Login
        </h1>

        <div className="flex flex-col gap-4">

          <Forminput
            text="Email"
            tipe="text"
            name="email"
            placeholder="Masukkan email"
            register={register}
            error={errors.email?.message}
          />

          <Forminput
            text="Password"
            tipe="password"
            name="password"
            placeholder="Masukkan password"
            register={register}
            error={errors.password?.message}
          />

          <Button label="Login" variant="primary" />

        </div>
      </form>
    </div>
  );
}