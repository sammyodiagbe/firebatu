import Image from "next/image";

const AvatarSelection = ({ src, id }) => {
  return (
    <label htmlFor={id}>
      <Image src={src} alt="female avatar" width={80} height={80} />
      <input
        type="radio"
        name="avatar-selection"
        id={id}
        onChange={(e) => console.log(e.target.id)}
      />
    </label>
  );
};

export default AvatarSelection;
