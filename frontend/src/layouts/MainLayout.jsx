import Navbar from "../components/navbar/Navbar";
import Assistant from "../components/assistant/Assistant";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />

      {children}

      <Assistant />
    </>
  );
};

export default MainLayout;