import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import Forminput from "../../../components/ui/Forminput";
import Button from "../../../components/ui/Button";

type FormData = {
  nama: string;
  role: string;
  foto: string;
};

const schema = z.object({
  nama: z.string().min(1, "Nama narasumber wajib diisi"),
  role: z.string().min(1, "Role narasumber wajib diisi"),
  foto: z.string().min(1, "Tolong input URL foto narasumber"),
});

export default function CreateSpeakers() {
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
    <div>
      <div className="text-center gap-6 mb-8">
        <h2 className="text-red-900 text-5xl font-semibold">
          Create New Speakers
        </h2>

        <p className="text-gray-600">
          Buat profil narasumber baru
        </p>
      </div>

      <div className="flex justify-center gap-6">
        <div className="flex bg-[#FEE3EC] p-10 rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)}>

            <Forminput
              text="Nama Narasumber"
              tipe="text"
              name="nama"
              placeholder="Masukkan nama narasumber"
              register={register}
              error={errors.nama?.message}
            />

            <Forminput
              text="Role Narasumber"
              tipe="text"
              name="role"
              placeholder="Masukkan role narasumber"
              register={register}
              error={errors.role?.message}
            />

            <Forminput
              text="URL Foto"
              tipe="text"
              name="foto"
              placeholder="Masukkan URL foto narasumber"
              register={register}
              error={errors.foto?.message}
            />

            <div className="flex justify-center mt-5">
              <Button label="Buat Speaker" variant="primary" />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}