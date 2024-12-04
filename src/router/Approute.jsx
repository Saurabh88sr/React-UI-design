import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Dashboard from "../page/Dashboard";
import ChoiceResone from "../page/mainpage/ChoiceResone";
import MultipleCard from "../page/mainpage/MultipleCard";

const Approute = () => {
  return (
    <div>
      <Navbar />
      <Dashboard />
      <ChoiceResone/>
      <MultipleCard/>
      <Footer/>
    </div>
  );
};

export default Approute;
