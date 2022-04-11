import "./App.css";
import Banner from "./Banner";
import Card from "./components/Card";
import Content1 from "./components/Content1";
import Content2 from "./components/Content2";
import Content3 from "./components/Content3";
import Faqs from "./components/FAQS";
import Rarity from "./components/Rarity";
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
              <Content1 />
              <Content2 />
              <Content3 />
              <Content4 />

              <Card />

              <Team />
              <Content5 />
              <Faqs />
            </>
          }
        ></Route>
        <Route path="/mint" element={<MintNft />}></Route>
      </Routes>
      {/* <Header />
      <Banner />
      <Content1 />
      <Content2 />
      <Content3 />
      <Content4 />

      <Card />
      <Rarity />

      <Team />
      <Content5 />
      <Faqs /> */}
    </div>
  );
}

export default App;
