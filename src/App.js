import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import MoviesInfo from "./Components/Movies/MoviesInfo";
import PageNotFound from "./Components/PageNotFound";
import "./styles.css";
import "./demo.css";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:name" element={<MoviesInfo />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
