import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Forminput from "../../../components/ui/Frominput"
import Button from "../../../components/ui/Button";

type FormData = {
    nama: string;
    role: string;
    foto: string
}

const schema = z.object({
    nama: z.string().min(1, "nama narasumber wajib di isi"),
    role: z.string().min(1, "role narasumber wajib di isi"),
    foto: z.string().min(1, "tolong input url foto narasumber"),
});

export default function CreateSpeakers() {
    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        console.log(data)
    }

    return (
        <div>

            <div className="text-center gap-6">
                <h2 className="text-red-900 text-5xl font-semibold">Create new Speakers</h2>
                <p className="text-gray-600">Buat profil narasumber baru</p>
            </div>
            <div className="flex justify-center gap-6">
                <div className="flex bg-[#FEE3EC] p-10 rounded-lg">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <Forminput
                            label="Masukan nama narasumber"
                            tipe="text"
                            name="nama"
                            register={register}
                            error={errors.nama?.message}
                            placeholder="masukan nama disini" text={""}                        />

                        <Forminput
                            label="Masukan Role narasumber"
                            tipe="text"
                            name="role"
                            register={register}
                            error={errors.role?.message}
                            placeholder="masukan role disini" text={""}                        />

                        <Forminput
                            label="Masukan url foto narasumber"
                            tipe="text"
                            name="foto"
                            register={register}
                            error={errors.foto?.message}
                            placeholder="letakan url foto disini" text={""}                        />

                        <div className="flex justify-center">
                            <Button label="Buat speaker" variant="primary" />
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}