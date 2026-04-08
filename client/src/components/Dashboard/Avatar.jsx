import { getInitials } from "../../utils/getInitials";

const Avatar = ({ name }) => {
  const initials = getInitials(name);

  return (
    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
      {initials}
    </div>
  );
};

export default Avatar;
