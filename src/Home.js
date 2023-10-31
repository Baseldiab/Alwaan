import Bestsellers from "./component/Bestsellers-section.jsx";
import Carousal from "./component/Carousal-section.jsx";
import Customers from "./component/Customers-section.jsx";
import Featured from "./component/Featured-section.jsx";
import MainNav from "./component/MainNav";
function HomePage() {
  return (
    <main>
      <MainNav />
      <Carousal />
      <Featured />
      <Customers />
      <Bestsellers />
    </main>
  );
}

export default HomePage;
