import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Posts from "./pages/Posts"
import OpenPost from './pages/OpenPost';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/react_pr2" element={<Posts /> } />
        <Route exact path="/posts" element={<Posts /> } />
        <Route exact path="/posts/:id" element={<OpenPost /> } />
      </Routes>
    </div>
  );
}

export default App;
