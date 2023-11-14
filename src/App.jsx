import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout"
import Home from "./Pages/Home"
import Following from "./Pages/Following"
import ListMusic from "./Pages/ListMusic"
import NoPage from "./Pages/NoPage"

function App(){
return(
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="following" element={<Following />} />
        <Route path="listmusic" element={<ListMusic />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>

)
}

export default App;

