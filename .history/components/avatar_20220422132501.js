import Image from "next/image";

const AvatarSelection = ({ src, id }) => {
  return (
    <label htmlFor={id}>
      <Image src={src} alt="female avatar" width={80} height={80} />
      <input
        type="radio"
        name="avatar-selection"
        id={id}
        onSelect={(e) => console.log(e.target.checked)}
      />
    </label>
  );
};

export default AvatarSelection;
