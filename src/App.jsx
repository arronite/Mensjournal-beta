import React from "react";
import Nav from "./Nav";
import Maincard from "./Maincard";
import EditorsPick from "./EditorsPick";
import Content from "./Content";
import Footer from "./Footer";
const App = () => {
  return (
    <div>
      <Nav />
      <Maincard />
      <EditorsPick />
      <Content title="Travel" />
      <Content title="FOOD & DRINK" />
      <Content title="GEAR" />
      <Content title="HEALTH & FITNESS" />
      <Footer />
    </div>
  );
};

export default App;
