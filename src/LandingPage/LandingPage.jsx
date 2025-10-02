import Banner from "./Banner/Banner";
import Nav from "./Nav/Nav";
import Scroll from "../Components/Scroll";
import Footer from "./Footer/Footer";
import SecNav from "./SecNav/SecNav";
import Courses from "./Courses/Courses";

const LandingPage = () => {
  return (
    <div className="font-inter bg-[#030a2e]">
      <Scroll></Scroll>
      <Nav></Nav>
      <Banner></Banner>
      <div className="relative mb-[710px]">
        <div className="sticky top-[10px] w-fit mx-auto z-50">
          <SecNav></SecNav>
        </div>
        <Courses></Courses>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default LandingPage;
