import useUser from "../features/authentication/useUser";

const Header = () => {
  const { data } = useUser();
  return <header className="bg-secondary-0 py-4 px-8">App Header</header>;
};

export default Header;
