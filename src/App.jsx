import MovieList from "./components/MovieList";
import Styleguide from "./components/Styleguide";
import Footer from "./layout/Footer";
import Header from "./layout/header";
import "./scss/style.scss";

function App() {
  return (
    <>
      <Header />
      <MovieList type={"popular mt50"} data={"popular"} />
      <MovieList type={"gallery mt50"} />
      <main>
        <Styleguide />
      </main>
      <Footer />
    </>
  );
}

export default App;
