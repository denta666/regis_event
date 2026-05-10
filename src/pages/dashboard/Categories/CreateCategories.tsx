import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Forminput from "../../../components/ui/Frominput"
import Button from "../../../components/ui/Button";

type FormData = {
    judul: string;
    deskripsi: string;
    kategori: string;
    lokasi: string;
    tanggal: string;
    harga: string;
    quota: string;
}

const schema = z.object({
    judul: z.string().min(1, "nama event wajib di isi"),
    deskripsi: z.string().min(1, "deskripsi event wajib di isi"),
    kategori: z.string().min(1, "kategori event wajib di isi"),
    lokasi: z.string().min(1, "lokasi event wajib di isi"),
    tanggal: z.string().min(1, "waktu event wajib di isi"),
    harga: z.string().min(1, "harga tiket event wajib di isi"),
    quota: z.string().min(1, "jumlah kursi event wajib di isi"),
});

export default function CreateCategory() {
    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        console.log(data)
    }

    return (
        <div className="px-54">
            <div className="flex flex-col text-center p-5">
                <h1 className="font-semibold text-5xl text-red-900">Create new category</h1>
                <p className="text-gray-600">Silahkan isi semua data dengan benar</p>
            </div>
            <div className="flex justify-center max-w-800px gap-6 ">


                <form onSubmit={handleSubmit(onSubmit)} className="bg-[#FEE3EC] rounded-lg p-10 ">
                    <Forminput
              label="Masukan judul"
              tipe="text"
              name="judul"
              register={register}
              error={errors.judul?.message}
              placeholder="masukan judul event" text={""}                    />

                    <Forminput
              label="Masukan deskripsi"
              tipe="text"
              name="deskripsi"
              register={register}
              error={errors.deskripsi?.message}
              placeholder="masukan deskripsi event" text={""}                    />

                    <Forminput
              label="Masukan kategori"
              tipe="text"
              name="kategori"
              register={register}
              error={errors.kategori?.message}
              placeholder="isi kategori event" text={""}                    />

                    <Forminput
              label="Masukan lokasi"
              tipe="text"
              name="lokasi"
              register={register}
              error={errors.lokasi?.message}
              placeholder="isi lokasi event" text={""}                    />

                    <Forminput
              label="Masukan tanggal"
              tipe="text"
              name="tanggal"
              register={register}
              error={errors.tanggal?.message}
              placeholder="masukan tanggal event" text={""}                    />

                    <Forminput
              label="Masukan harga"
              tipe="text"
              name="harga"
              register={register}
              error={errors.harga?.message}
              placeholder="berapa harga event" text={""}                    />

                    <Forminput
              label="Masukan quota event"
              tipe="text"
              name="quota"
              register={register}
              error={errors.quota?.message}
              placeholder="berapa quota event" text={""}                    />


                    <div className="flex justify-center">
                        <Button label="Buat Category" variant="primary" />
                    </div>

                </form>
            </div>
        </div >
    );
};