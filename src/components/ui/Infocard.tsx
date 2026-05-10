import Button from "./Button";
import type { ButtonProps } from "./Button";

interface InfocardProps{
    title?: string;
    heading?: string;
    heading2?: string;
    image1?: string;
    description?: string;
    image2?: string;
    variant?: "left" | "right";
    buttontext?: string;
    buttonprops?: Omit<ButtonProps, "label">;
    
};

export const Infocard: React.FC<InfocardProps> = ({ heading, heading2, image1, description,  image2, variant = "left", buttontext, buttonprops}: InfocardProps) =>{
    return (
        <div className={`rounded-2xl p-10 mt-20 grid grid-cols-3 md:flex-row items-center justify-between gap-10 ${variant === "right" ? "md:flex-row-reverse" : ""}`}>
            {/* // bagian teks */}
            <div className="max-w-full col-span-2">
                <h1 className="text-5xl font-semibold mb-4 text-red-900">{heading}</h1>
                <h1 className="text-4xl font-semibold mb-4 text-red-900">{heading2}</h1>
                <img src={image1}  className="w-100 mb-4"/>
                <p className="text-gray-600 leading-relaxed text-xl">{description}</p>
                <div className="mt-6">
                    <Button label={buttontext} {...buttonprops} />
                </div>
            </div>
            {/* // bagian gambar */}
            <div className="w-80 col-span-1">
            <img src={image2} alt={description} className="w-full object-contain"/>
            </div>
        </div>
    )
}
export const Infocard2: React.FC<InfocardProps> = ({heading, image1, description, variant = "left", buttontext, buttonprops}: InfocardProps) =>{
    return (
        <div className={`rounded-2xl p-10 flex flex-col md:flex-row items-center justify-center gap-40 ${variant === "right" ? "md:flex-row-reverse" : ""}`}>
            {/* // bagian teks */}
            <div className="max-w-xl">
                <h1 className="text-4xl font-bold mb-4 text-red-900">{heading}</h1>
                <p className="text-gray-600 leading-relaxed text-xl">{description}</p>
                <div className="mt-6">
                    <Button label={buttontext} {...buttonprops} />
                </div>
            </div>
            {/* // bagian gambar */}
            <img src={image1} alt={description} className="w-100 mb-4"/>
        </div>
    )
}
export const Infocard3: React.FC<InfocardProps> = ({heading, image1, description, variant = "left", buttontext, buttonprops}: InfocardProps) =>{
    return (
        <div className={`rounded-2xl p-10 flex flex-col md:flex-row items-center justify-center gap-40 ${variant === "right" ? "md:flex-row-reverse" : ""}`}>
            {/* // bagian gambar */}
            <img src={image1} alt={description} className="w-100 mb-4"/>
            {/* // bagian teks */}
            <div className="max-w-xl">
                <h1 className="text-4xl font-bold mb-4 text-red-900">{heading}</h1>
                <p className="text-gray-600 leading-relaxed text-xl text-justify">{description}</p>
                <div className="mt-6">
                    <Button label={buttontext} {...buttonprops} />
                </div>
            </div>
        </div>
    )
}

// =================================================================================
// infocard khusus untuk IT competition karena ada tambahan heading dan gambar kedua
// =================================================================================


export const InfocardITcompetition: React.FC<InfocardProps> = ({ heading, heading2, image1, description,  image2, variant = "left", buttontext, buttonprops}: InfocardProps) =>{
    return (
        <div className={`rounded-2xl p-10 mt-20 grid grid-cols-3 md:flex-row items-center justify-between gap-10 ${variant === "right" ? "md:flex-row-reverse" : ""}`}>
            {/* // bagian teks */}
            <div className="max-w-full col-span-2">
                <h1 className="text-6xl font-semibold mb-4 text-red-900">{heading}</h1>
                <h1 className="text-4xl font-semibold mb-4 text-red-900">{heading2}</h1>
                <img src={image1}  className="w-100 mb-4"/>
                <p className="text-gray-600 leading-relaxed text-xl">{description}</p>
                <div className="mt-6">
                    <Button label={buttontext} {...buttonprops} />
                </div>
            </div>
            {/* // bagian gambar */}
            <div className="w-100 col-span-1">
            <img src={image2} alt={description} className="w-full object-contain"/>
            </div>
        </div>
    )
}
export const InfocardDescription: React.FC<InfocardProps> = ({heading,  description}: InfocardProps) =>{
    return (
        <div className="text-center ">
            <h1 className="text-5xl font-semibold mb-5 text-red-900">{heading}</h1>
            <p className="text-2xl px-10 leading-9 text-gray-600">{description}</p>
        </div>
    )
}

// =================================================================================
// infocard khusus untuk IT seminar 
// =================================================================================

export const InfocardITseminar: React.FC<InfocardProps> = ({ heading, heading2, image1, description,  image2, variant = "left", buttontext, buttonprops}: InfocardProps) =>{
    return (
        <div className={`rounded-2xl p-10 mt-20 grid grid-cols-5 md:flex-row items-center justify-between gap-10 ${variant === "right" ? "md:flex-row-reverse" : ""}`}>
            {/* // bagian teks */}
            <div className="max-w-full col-span-3">
                <h1 className="text-6xl font-semibold mb-4 text-red-900">{heading}</h1>
                <h1 className="text-4xl font-semibold mb-4 text-red-900">{heading2}</h1>
                <img src={image1}  className="w-150 mb-4"/>
                <p className="text-gray-600 leading-8 text-2xl">{description}</p>
                <div className="mt-6">
                    <Button label={buttontext} {...buttonprops} />
                </div>
            </div>
            {/* // bagian gambar */}
            <div className="w-120 justify-self-end col-span-2">
            <img src={image2} />
            </div>
        </div>
    )
}
export const InfocardTentangseminar: React.FC<InfocardProps> = ({heading,  description}: InfocardProps) =>{
    return (
        <div className="text-center ">
            <h1 className="text-5xl font-semibold mb-5 text-red-900">{heading}</h1>
            <p className="text-2xl px-10 leading-9 text-gray-600">{description}</p>
        </div>
    )
}
// =================================================================================
// infocard khusus untuk IT workshop
// =================================================================================

export const InfocardITworkshop: React.FC<InfocardProps> = ({ heading, heading2, image1, description,  image2, variant = "left", buttontext, buttonprops}: InfocardProps) =>{
    return (
        <div className={`rounded-2xl p-10 mt-20 grid grid-cols-3 md:flex-row items-center justify-between gap-10 ${variant === "right" ? "md:flex-row-reverse" : ""}`}>
            {/* // bagian teks */}
            <div className="max-w-full col-span-2">
                <h1 className="text-6xl font-semibold mb-4 text-red-900">{heading}</h1>
                <h1 className="text-4xl font-semibold mb-4 text-red-900">{heading2}</h1>
                <img src={image1}  className="w-100 mb-4"/>
                <p className="text-gray-600 leading-relaxed text-xl">{description}</p>
                <div className="mt-6">
                    <Button label={buttontext} {...buttonprops} />
                </div>
            </div>
            {/* // bagian gambar */}
            <div className="w-100 col-span-1">
            <img src={image2} alt={description} className="w-full object-contain"/>
            </div>
        </div>
    )
}
export const InfocardTentangworkshop: React.FC<InfocardProps> = ({heading,  description}: InfocardProps) =>{
    return (
        <div className="text-center ">
            <h1 className="text-5xl font-semibold mb-5 text-red-900">{heading}</h1>
            <p className="text-2xl px-10 leading-9 text-gray-600">{description}</p>
        </div>
    )
}
// =================================================================================
// infocard khusus untuk IT workshop
// =================================================================================

export const InfocardITtalkshow: React.FC<InfocardProps> = ({ heading, heading2, image1, description,  image2, variant = "left", buttontext, buttonprops}: InfocardProps) =>{
    return (
        <div className={`rounded-2xl p-10 mt-20 grid grid-cols-5 md:flex-row items-center justify-between gap-10 ${variant === "right" ? "md:flex-row-reverse" : ""}`}>
            {/* // bagian teks */}
            <div className="max-w-full col-span-3">
                <h1 className="text-6xl font-semibold mb-4 text-red-900">{heading}</h1>
                <h1 className="text-4xl font-semibold mb-4 text-red-900">{heading2}</h1>
                <img src={image1}  className="w-150 mb-4"/>
                <p className="text-gray-600 leading-8 text-2xl">{description}</p>
                <div className="mt-6">
                    <Button label={buttontext} {...buttonprops} />
                </div>
            </div>
            {/* // bagian gambar */}
            <div className="w-120 justify-self-end col-span-2">
            <img src={image2} />
            </div>
        </div>
    )
}
export const InfocardTentangTalkshow: React.FC<InfocardProps> = ({heading,  description}: InfocardProps) =>{
    return (
        <div className="text-center ">
            <h1 className="text-5xl font-semibold mb-5 text-red-900">{heading}</h1>
            <p className="text-2xl px-10 leading-9 text-gray-600">{description}</p>
        </div>
    )
}

export default Infocard;