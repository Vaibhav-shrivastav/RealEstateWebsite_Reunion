import './App.css';
import Navbar from './components/Navbar.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Rent from './components/Rent';
import Buy from './components/Buy';
import Sell from './components/Sell';
import SearchBar from './components/SearchBar';
import FilterableList from './components/FilterableList';
import State from './context/State';

function App() {
  return (
    <>
    <State>
    <BrowserRouter>
      <Navbar/> <br />
      <SearchBar/><br />
      <FilterableList/>
      <Routes>
        <Route path = '/' element = {<Rent/>}></Route>
        <Route path = '/buy' element = {<Buy/>}></Route>
        <Route path = '/sell' element = {<Sell/>}></Route>
      </Routes>
    </BrowserRouter>
    </State>
    </>
  );
}

export default App;
