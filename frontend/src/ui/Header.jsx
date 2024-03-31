import UserAvatar from "../features/authentication/UserAvatar";
import useUser from "../features/authentication/useUser";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  const { isLoading, user } = useUser();
  return (
    <header className="bg-secondary-0 py-4 px-8 border-b border-secondary-200">
      <div
        className={`container xl:max-w-screen-lg flex items-center justify-end gap-x-8 ${
          isLoading ? "blur-sm opacity-50" : ""
        }`}>
        <UserAvatar />
        <HeaderMenu />
      </div>
    </header>
  );
};

export default Header;
