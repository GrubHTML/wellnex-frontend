import { useAuth } from "../hooks/useAuth";

const UserInfoDropdown = () => {
  const { user } = useAuth();
  const myName = user?.username;
  const nameFirstLetter = myName?.charAt(0);
  return (
    <div className="relative group inline-block">
      {/* avatar */}
      <div className="bg-gray-900 hover:bg-gray-600 transition-all duration-300 rounded-full font-bold h-8 w-8 flex justify-center items-center text-white cursor-pointer">
        {nameFirstLetter}
      </div>
      {/*dropdown  */}
      <div
        className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg p-3
      opacity-0 scale-95 translate-y-2
      group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0
      transition-all duration-300 ease-out
      pointer-events-none group-hover:pointer-events-auto"
      >
        <p className="font-semibold text-gray-800">{user?.username}</p>
        <p className="text-sm text-gray-500">{user?.email}</p>
      </div>
    </div>
  );
};

export default UserInfoDropdown;
