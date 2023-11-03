import Bestsellers from "./component/Bestsellers-section.jsx";
import Carousal from "./component/Carousal-section.jsx";
import Customers from "./component/Customers-section.jsx";
import Featured from "./component/Featured-section.jsx";
import MainFooter from "./component/Main-Footer.js";
import MainNav from "./component/MainNav";
import Stylish from "./component/Stylish-Section.jsx";
function HomePage() {
  return (
    <main>
      <MainNav />
      <Carousal />
      <Featured />
      <Customers />
      <Bestsellers />
      <Stylish />
      <MainFooter />
    </main>
  );
}

export default HomePage;
