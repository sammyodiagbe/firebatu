import Image from "next/image";

const AvatarSelection = ({
  src,
  id,
  avatarSelection,
  updateAvatarSelection,
}) => {
  return (
    <label htmlFor={id}>
      <Image src={src} alt="female avatar" width={80} height={80} />
      <input
        type="radio"
        name="avatar-selection"
        id={id}
        checked={id === avatarSelection}
        onChange={(e) => updateAvatarSelection(e.target.id)}
      />
    </label>
  );
};

export default AvatarSelection;
