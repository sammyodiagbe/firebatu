import Image from "next/image";

const AvatarSelection = ({ src, id }) => {
  return (
    <label htmlFor={id}>
      <Image src={src} alt="female avatar" width={80} height={80} />
      <input type="checkbox" name="image-2" id={id} />
    </label>
  );
};

export default AvatarSelection;
