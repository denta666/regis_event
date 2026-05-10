import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import Forminput from "../../../components/ui/Forminput";
import Button from "../../../components/ui/Button";

type FormData = {
  judul: string;
  deskripsi: string;
  kategori: string;
  lokasi: string;
  tanggal: string;
  harga: string;
  quota: string;
};

const schema = z.object({
  judul: z.string().min(1, "Nama event wajib diisi"),
  deskripsi: z.string().min(1, "Deskripsi event wajib diisi"),
  kategori: z.string().min(1, "Kategori event wajib diisi"),
  lokasi: z.string().min(1, "Lokasi event wajib diisi"),
  tanggal: z.string().min(1, "Tanggal event wajib diisi"),
  harga: z.string().min(1, "Harga tiket wajib diisi"),
  quota: z.string().min(1, "Jumlah quota wajib diisi"),
});

export default function CreateCategory() {
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
    <div className="px-10 py-10">
      <div className="flex flex-col text-center p-5">
        <h1 className="font-semibold text-5xl text-red-900">
          Create New Category
        </h1>

        <p className="text-gray-600">
          Silahkan isi semua data dengan benar
        </p>
      </div>

      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-[#FEE3EC] rounded-lg p-10 w-full max-w-xl"
        >
          <Forminput
            text="Judul Event"
            tipe="text"
            name="judul"
            placeholder="Masukkan judul event"
            register={register}
            error={errors.judul?.message}
          />

          <Forminput
            text="Deskripsi"
            tipe="text"
            name="deskripsi"
            placeholder="Masukkan deskripsi event"
            register={register}
            error={errors.deskripsi?.message}
          />

          <Forminput
            text="Kategori"
            tipe="text"
            name="kategori"
            placeholder="Masukkan kategori event"
            register={register}
            error={errors.kategori?.message}
          />

          <Forminput
            text="Lokasi"
            tipe="text"
            name="lokasi"
            placeholder="Masukkan lokasi event"
            register={register}
            error={errors.lokasi?.message}
          />

          <Forminput
            text="Tanggal"
            tipe="date"
            name="tanggal"
            placeholder="Masukkan tanggal event"
            register={register}
            error={errors.tanggal?.message}
          />

          <Forminput
            text="Harga"
            tipe="text"
            name="harga"
            placeholder="Masukkan harga tiket"
            register={register}
            error={errors.harga?.message}
          />

          <Forminput
            text="Quota"
            tipe="text"
            name="quota"
            placeholder="Masukkan jumlah quota"
            register={register}
            error={errors.quota?.message}
          />

          <div className="flex justify-center mt-5">
            <Button label="Buat Category" variant="primary" />
          </div>
        </form>
      </div>
    </div>
  );
}