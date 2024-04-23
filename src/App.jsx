import MovieList from "./components/MovieList";
import BestMovieList from "./components/BestMovieList";
import Styleguide from "./components/Styleguide";
import Footer from "./layout/Footer";
import Header from "./layout/header";
import DetailSearch from "./components/DetailSearch";
import "./scss/style.scss";

function App() {
  return (
    <>
      <Header />
      <BestMovieList />
      <DetailSearch />
      <MovieList />
      <main>
        <Styleguide />
      </main>
      <Footer />
    </>
  );
}

export default App;
