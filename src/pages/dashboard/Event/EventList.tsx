import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Forminput from "../../../components/ui/Frominput"
import Button from "../../../components/ui/Button";

type FormData = {
    nama: string;
    kategori: string;
    lokasi: string;
    tanggal: string;
    deskripsi: string;
}

const schmea = z.object({
    nama: z.string().min(1, "isi nama kegiatan"),
    kategori: z.string().min(1, "isi jenis kegiatan"),
    lokasi: z.string().min(1, "isi tempat kegiatan"),
    tanggal: z.string().min(1, "isi kapan kegiatan dilaksanakan"),
    deskripsi: z.string().min(1, "deskripsi kegiatan wajib di isi"),
});

export default function CreateEvent() {
    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: zodResolver(schmea),
    });

    const onSubmit = (data: FormData) => {
        console.log(data)
    }

    return (
        <div>

            <div className="text-center">
                <h2 className="text-red-900 font-semibold text-5xl">Create new Event</h2>
                <p>Buat kegiatan baru</p>
            </div>

            <div className="flex justify-center gap-6">
                <div className="flex bg-[#FEE3EC] p-10 rounded-lg">

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <Forminput
                            label="masukan nama"
                            tipe="text"
                            name="nama"
                            register={register}
                            error={errors.nama?.message}
                            placeholder="masukan nama event" text={""}                        />

                        <Forminput
                            label="masukan kategori"
                            tipe="text"
                            name="kategori"
                            register={register}
                            error={errors.kategori?.message}
                            placeholder="masukan kategori event" text={""}                        />

                        <Forminput
                            label="masukan lokasi"
                            tipe="text"
                            name="lokasi"
                            register={register}
                            error={errors.lokasi?.message}
                            placeholder="masukan lokasi event" text={""}                        />

                        <Forminput
                            label="masukan tanggal"
                            tipe="text"
                            name="tanggal"
                            register={register}
                            error={errors.tanggal?.message}
                            placeholder="masukan tanggal event" text={""}                        />

                        <Forminput
                            label="masukan deskripsi"
                            tipe="text"
                            name="deskripsi"
                            register={register}
                            error={errors.deskripsi?.message}
                            placeholder="masukan deskripsi event" text={""}                        />

                        <div className="flex justify-center">
                            <Button label="Buat Event" variant="primary" />
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}