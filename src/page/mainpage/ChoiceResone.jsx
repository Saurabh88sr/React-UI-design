import { useEffect, useState } from "react";
import ChoiceCard from "../../component/card/ChoiceCard";

const ChoiceResone = () => {
  //--------------------------------------------------------------------------------------------
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
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
      <div
        className={`  py-10 ${
          showTopButton ? "sm:px-24 p-5 " : "p-5"
        } duration-500 bg-gradient-to-b from-slate-300 `}

      >
        <div className=" text-center pb-10">
          <h2 className="text-4xl font-semibold">4 Reasons To Choose Us</h2>
        </div>
        <div className="md:flex justify-evenly gap-4">
          <ChoiceCard />
          <ChoiceCard />
          <ChoiceCard />
          <ChoiceCard />

        </div>
      </div>
    </div>
  );
};

export default ChoiceResone;
