import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import Forminput from "../../../components/ui/Forminput";
import Button from "../../../components/ui/Button";

type FormData = {
  nama: string;
  kategori: string;
  lokasi: string;
  tanggal: string;
  deskripsi: string;
};

const schema = z.object({
  nama: z.string().min(1, "Isi nama kegiatan"),
  kategori: z.string().min(1, "Isi jenis kegiatan"),
  lokasi: z.string().min(1, "Isi tempat kegiatan"),
  tanggal: z.string().min(1, "Isi kapan kegiatan dilaksanakan"),
  deskripsi: z.string().min(1, "Deskripsi kegiatan wajib diisi"),
});

export default function CreateEvent() {
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

      <div className="text-center mb-8">
        <h2 className="text-red-900 font-semibold text-5xl">
          Create New Event
        </h2>

        <p>Buat kegiatan baru</p>
      </div>

      <div className="flex justify-center gap-6">
        <div className="flex bg-[#FEE3EC] p-10 rounded-lg">

          <form onSubmit={handleSubmit(onSubmit)}>

            <Forminput
              text="Nama Event"
              tipe="text"
              name="nama"
              placeholder="Masukkan nama event"
              register={register}
              error={errors.nama?.message}
            />

            <Forminput
              text="Kategori Event"
              tipe="text"
              name="kategori"
              placeholder="Masukkan kategori event"
              register={register}
              error={errors.kategori?.message}
            />

            <Forminput
              text="Lokasi Event"
              tipe="text"
              name="lokasi"
              placeholder="Masukkan lokasi event"
              register={register}
              error={errors.lokasi?.message}
            />

            <Forminput
              text="Tanggal Event"
              tipe="date"
              name="tanggal"
              placeholder="Masukkan tanggal event"
              register={register}
              error={errors.tanggal?.message}
            />

            <Forminput
              text="Deskripsi Event"
              tipe="text"
              name="deskripsi"
              placeholder="Masukkan deskripsi event"
              register={register}
              error={errors.deskripsi?.message}
            />

            <div className="flex justify-center mt-5">
              <Button label="Buat Event" variant="primary" />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}