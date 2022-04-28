import "./App.css";
import Banner from "./Banner";
import Card from "./components/Card";

import Content3 from "./components/Content3";
import Faqs from "./components/FAQS";
import Team from "./components/Team";
import Header from "./Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Content4 from "./components/Content4";
import Content5 from "./components/Content5";
import {
  BrowserRouter,
  NavLink,
  Route,
  Router,
  Routes,
  useLocation,
} from "react-router-dom";
import MintNft from "./MintNft";
import BannerCard1 from "./components/BannerCard1";
import BannerCard2 from "./components/BannerCard2";
import Footer from "./components/Footer";
import BannerCard3 from "./components/BannerCard2";
import FoundingFkers from "./components/FoundingFkers";
import OurMission from "./components/OurMission";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out-cubic",
      mirror: true,
    });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Banner />
              <BannerCard1 />
              <BannerCard2 />
              <FoundingFkers />
              <OurMission />
              <Card />
              <Content5 />
              <Faqs />
              <Footer />
            </>
          }
        ></Route>
        <Route path="/mint" element={<MintNft />}></Route>
      </Routes>
    </div>
  );
}

export default App;
