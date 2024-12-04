import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <header className={`fixed top-0  py-3 px-6 z-10 w-full ${showTopButton?"bg-white/50 backdrop-blur-md ":""}`}>
        <div className="flex justify-between items-center">
          <ul className="flex w-1/2 gap-24 ">
            <li className="navtext">HOME</li>
            <li className="navtext">ABOUT</li>
            <li className="navtext">ARTICALES</li>
            <li className="navtext">CONTACT</li>
          </ul>
          <div className="text-white flex gap-6 bg-white/40 backdrop-blur-md py-2 px-6 rounded-full">
            <div className="navtext">
              <SearchOutlinedIcon />
            </div>
            <div className="navtext">
              <PermIdentityOutlinedIcon />
            </div>
            <div className="navtext">
              <MenuOutlinedIcon />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
