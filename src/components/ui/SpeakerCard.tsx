interface SpeakerCardProps {
    image: string;
    name: string;
    role: string;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ image, name, role }) => {
    return (
        <div>
            <img src={image} className="w-24 h-24" />
            <h3>{name}</h3>
            <p>{role}</p>
        </div>
    );
};

export default SpeakerCard;