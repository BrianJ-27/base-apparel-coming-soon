import Footer from "./components/layout/footer/footer";
import Banner from "./components/layout/banner/banner";
import Header from "./components/layout/header/header";

const App = () => {
  return (
    <div className="grid__container">
      <main className="main__grid--container">
        <div className="image__container">
          <Banner />
        </div>
        <div className="intro__container">
          <Header />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default App;
