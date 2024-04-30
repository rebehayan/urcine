import Footer from "./layout/Footer";
import Header from "./layout/header";
import PageRouter from "./route/PageRouter";
import "./scss/style.scss";

function App() {
  return (
    <>
      <Header />
      <main>
        <PageRouter />
      </main>
      <Footer />
    </>
  );
}

export default App;
