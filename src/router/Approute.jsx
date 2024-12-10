import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Dashboard from "../page/Dashboard";
import AboutSection from "../page/mainpage/AboutSection";
import ChoiceResone from "../page/mainpage/ChoiceResone";
import MultipleCard from "../page/mainpage/MultipleCard";

const Approute = () => {
  return (
    <div>
      <Navbar />
      <Dashboard />
      <ChoiceResone/>
      <MultipleCard/>
      <AboutSection/>
      <Footer/>
    </div>
  );
};

export default Approute;
