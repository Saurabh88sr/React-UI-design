import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Dashboard from "../page/Dashboard";
import ChoiceResone from "../page/mainpage/ChoiceResone";

const Approute = () => {
  return (
    <div>
      <Navbar />
      <Dashboard />
      <ChoiceResone/>
      <Footer/>
    </div>
  );
};

export default Approute;
