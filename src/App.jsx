import { useState } from "react";
import MovieList from "./components/MovieList";
import Styleguide from "./components/Styleguide";
import Footer from "./layout/Footer";
import Header from "./layout/header";
import DetailSearch from "./components/DetailSearch";
import "./scss/style.scss";
import MovieSearchResult from "./components/MovieSearchResult";

function App() {
  const [searchData, setSearchData] = useState([]);
  // const sendData = (newData) => {
  //   setSearchData(newData);
  // };
  console.log(searchData);
  return (
    <>
      <Header />
      <main>
        <MovieList type={"popular mt50"} data="popular" />
        <DetailSearch sendResult={setSearchData} />
        {searchData.length > 0 ? (
          <MovieSearchResult result={searchData} />
        ) : (
          <MovieList type={"gallery mt50"} />
        )}
        <Styleguide />
      </main>
      <Footer />
    </>
  );
}

export default App;
