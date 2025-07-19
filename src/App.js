import { AppContext } from "./Context/ContextApi";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HeaderAndLibrary from "./components/HeaderAndLibrary";
import Main from "./components/Main";
import Player from "./components/Player";
import SearchFeedCard from "./components/SearchFeedCard";
import PlaylistCard from "./components/PlaylistCard";
import CollectionCard from "./components/CollectionCard";

function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <div className="flex">
          <HeaderAndLibrary />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/search" element={<SearchFeedCard />} />
            <Route path="/playlist/:key" element={<PlaylistCard />} />
            <Route path="/collection/:key" element={<CollectionCard />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Player />
    </AppContext>
  );
}

export default App;
