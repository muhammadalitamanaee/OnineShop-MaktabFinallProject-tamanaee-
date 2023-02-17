import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Button from "./components/Button";
import Header from "./layouts/Header";
import Card from "./layouts/Card";
import Container from "./layouts/Container";
import store from "./assets/store-3-line.png";
import home from "./assets/home-heart-line.png";
import shirt from "./assets/t-shirt-2-line.png";
import smartPhone from "./assets/smartphone-line.png";
import book from "./assets/book-3-line.png";
import Footer from "./layouts/Footer";
// import NavBar from "./layouts/NavBar";
import Carousel from "./layouts/Carousel";
import NavBar from "./layouts/NavBar";
function App() {
  const [loginState, setLogin] = useState(true);
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-28 mb-40">
        <Header />
      </div>
      {loginState && <Carousel />}
      {loginState && (
        <Container
          dir="ltr"
          className="overflow-x-auto mx-auto grid grid-cols-5 grid-rows-1 w-2/3 p-6 gap-4 h-[240px] bg-zinc-200 rounded-[8px] mt-10"
        >
          <Card src={store} content="سوپر مارکت" />
          <Card src={book} content="کتاب و هنر" />
          <Card src={home} content="خانه و آشپزخانه" />
          <Card src={smartPhone} content="تلفن همراه" />
          <Card src={shirt} content="پوشاک" />
        </Container>
      )}
      <Footer />
    </>
  );
}

export default App;
