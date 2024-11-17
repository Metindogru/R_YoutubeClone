import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Feed from "./pages/Feed";
import Detail from "./pages/Detail/İndex";
import SearchResult from "./pages/SearchResult.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/watch" element={<Detail />} />

        <Route path="/results" element={<SearchResult />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
