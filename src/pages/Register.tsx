import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormInput from "../components/ui/Forminput";
import Button from "../components/ui/Button";

const schema = z.object({
  nama: z.string().min(1, "Nama harus diisi"),
  email: z.string().email("Email tidak valid"),
  phone: z.string().min(12, "Nomor telepon minimal 12 digit"),
  event: z.enum(["Talkshow", "Seminar", "Workshop"] as const, {
    error: "Pilih salah satu event",
  }),
});

export default function EventRegister() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <form onSubmit={handleSubmit((data) => console.log(data))} className="space-y-4">
        <FormInput
          text="Nama"
          tipe="text"
          name="nama"
          register={register}
          error={errors.nama?.message}
        />
        <FormInput
          text="Email"
          tipe="text"
          name="email"
          register={register}
          error={errors.email?.message}
        />
        <FormInput
          text="Nomor Telepon"
          tipe="text"
          name="phone"
          register={register}
          error={errors.phone?.message}
        />

        <div>
          <label className="block mb-1 font-medium">Pilih Event</label>
          <select {...register("event")} className="w-full border rounded p-2">
            <option value="">-- Pilih Event --</option>
            <option value="Talkshow">Talkshow</option>
            <option value="Seminar">Seminar</option>
            <option value="Workshop">Workshop</option>
          </select>
          {errors.event && (
            <p className="text-red-600 text-sm">{errors.event.message}</p>
          )}
        </div>

        <div className="flex justify-end">
          <Button label="Daftar" variant="primary" />
        </div>
      </form>
    </div>
  );
}
