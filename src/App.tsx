import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormInput from "./components/ui/Forminput";
import Button from "./components/ui/Button";

const schema = z.object({
  nama: z.string().min(1, "Nama belum diisi"),
  email: z.string().min(1, "Email belum diisi").email("Email tidak valid"),
  phone: z
    .string()
    .min(1, "Nomor telepon belum diisi")
    .min(12, "Nomor telepon minimal 12 digit"),
  event: z.enum(["Talkshow", "Seminar", "Workshop"] as const, {
    message: "Event belum dipilih",
  }),
});

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="container mx-auto mt-10 flex justify-center">
      <div className="max-w-md w-full p-6 border rounded shadow">
        <h2 className="text-xl font-bold mb-4 text-center">
          Register Event
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
            <select
              {...register("event")}
              className="w-full border rounded p-2"
            >
              <option value="">-- Pilih Event --</option>
              <option value="Talkshow">Talkshow</option>
              <option value="Seminar">Seminar</option>
              <option value="Workshop">Workshop</option>
            </select>

            {errors.event && (
              <p className="text-red-600 text-sm">
                {errors.event.message as string}
              </p>
            )}
          </div>

          <div className="flex justify-end">
            <Button label="Daftar" variant="primary" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;