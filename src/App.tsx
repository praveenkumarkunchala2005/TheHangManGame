
import {Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HowToPlay from "./pages/HowToPlay";
import Game from "./pages/Game";
import PlayArea from "./pages/PlayArea";
import WrongCategory from "./pages/WrongCategory";
function App(){
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/game" element={<Game/>} />
        <Route path="/game/Movies" element={<PlayArea selectedCategory="Movies"/>} />
        <Route path="/game/TV Shows" element={<PlayArea selectedCategory="TV Shows"/>} />
        <Route path="/game/Countries" element={<PlayArea selectedCategory="Countries"/>} />
        <Route path="/game/Capital Cities" element={<PlayArea selectedCategory="Capital Cities" />} />
        <Route path="/game/Animals" element={<PlayArea selectedCategory="Animals"/>} />
        <Route path="/game/Sports" element={<PlayArea selectedCategory="Sports"/>} />
        <Route path="/game/:category" element={<WrongCategory/>}/>
        <Route path="/HowToPlay" element={<HowToPlay/>} />
      </Routes>
    </>
  );
}
export default App;