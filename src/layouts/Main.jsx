//= Components
import ScrollToTop from "@components/ScrollToTop";
import TopNav from "@components/Navbars/DigitalNav/TopNav";
import Navbar from "@components/Navbars/DigitalNav";
import Footer from "@common/Footer";
//= Scripts

const MainLayout = ({ children, scrollTopText }) => {
  return (
    <>
      <>
        {/* <TopNav />
        <Navbar /> */}
        {children}
        <Footer />
      </>
      <ScrollToTop topText={scrollTopText} />
    </>
  );
};

export default MainLayout;
