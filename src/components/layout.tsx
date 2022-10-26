import { Outlet } from "react-router-dom";

interface IProps {}

const Layout: React.FC<IProps> = () => {
  return (
    <main className="App">
      <Outlet />
    </main>
  );
};

export default Layout;
