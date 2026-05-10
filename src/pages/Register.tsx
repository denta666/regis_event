import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import FormInput from "../components/ui/Forminput";
import Button from "../components/ui/Button";

const schema = z
  .object({
    nama: z.string().min(1, "Nama harus diisi"),
    email: z.string().email("Email tidak valid"),
    password: z.string().min(6, "Password minimal 6 karakter"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password tidak sama",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof schema>;

export default function Register() {
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
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h2 className="text-xl font-bold mb-4 text-center">
        Register Akun
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >

        <FormInput
          text="Nama"
          tipe="text"
          name="nama"
          placeholder="Masukkan nama"
          register={register}
          error={errors.nama?.message}
        />

        <FormInput
          text="Email"
          tipe="email"
          name="email"
          placeholder="Masukkan email"
          register={register}
          error={errors.email?.message}
        />

        <FormInput
          text="Password"
          tipe="password"
          name="password"
          placeholder="Masukkan password"
          register={register}
          error={errors.password?.message}
        />

        <FormInput
          text="Konfirmasi Password"
          tipe="password"
          name="confirmPassword"
          placeholder="Masukkan konfirmasi password"
          register={register}
          error={errors.confirmPassword?.message}
        />

        <div className="flex justify-end">
          <Button label="Daftar" variant="primary" />
        </div>

      </form>
    </div>
  );
}