import Image from "next/image";

const AvatarSelection = ({ src }) => {
  return (
    <Image src={src} height={80} width={80} alt="Avatar selection choice" />
  );
};

export default AvatarSelection;
