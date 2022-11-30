import HomePage from "./Screen/HomePage";
import Home from "./Screen/Home";
import Vaccines from "./Screen/Vaccines";
import Sintomi from "./Screen/Sintomi";
import ErrorPage from "./Screen/ErrorPage";
import {BrowserRouter as Router, Routes, Route} from'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<HomePage/>}>
          <Route index element={<Home/>}/>
        <Route path='/vaccini' element={<Vaccines/>}/>
        <Route path='/sintomi' element={<Sintomi/>}/>
        <Route path='*' element={<ErrorPage/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App;
