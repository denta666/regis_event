// import FormInput from "../components/ui/Forminput";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { useForm } from "react-hook-form";


// // schema validasi form login + event
// const schema = z.object({
//   nama: z.string().min(1, "Nama harus diisi"),
//   email: z.string().email("Email tidak valid"),
//   phone: z.string().min(10, "Nomor telepon minimal 10 digit"),
//   event: z.enum(["Talkshow", "Seminar", "Workshop"], {
//     error: "Pilih salah satu event",
//   }),
// });

// export default function RegisterEvent() {
//   const { register, handleSubmit, formState: { errors } } = useForm({
//     resolver: zodResolver(schema),
//   });

//   return (
//     <div>
//       <form onSubmit={handleSubmit((data) => console.log(data))}>
//         <div className="flex flex-col gap-2">
//           <FormInput
//             text="Email"
//             tipe="text"
//             name="email"
//             register={register}
//             error={errors.email?.message}
//           />

//           {/* Tambahan field event */}
//           <div>
//             <label className="block mb-1 font-medium">Pilih Event</label>
//             <select {...register("event")} className="w-full border rounded p-2">
//               <option value="">-- Pilih Event --</option>
//               <option value="Talkshow">Talkshow</option>
//               <option value="Seminar">Seminar</option>
//               <option value="Workshop">Workshop</option>
//             </select>
//             {errors.event && (
//               <p className="text-red-600 text-sm">{errors.event.message}</p>
//             )}
//           </div>
//         </div>

//         <div className="flex gap-2 mt-4">
//           <button type="submit" className="border px-4 py-2 rounded">
//             Daftar
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }
