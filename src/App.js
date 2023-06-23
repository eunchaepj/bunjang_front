import './App.css';
import Top from './components/Top';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddProduct from './pages/AddProduct';
function App() {
    return (
        <>
            <Top />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/products/new' element={<AddProduct/>} />
            </Routes>
        </>
    );
}

export default App;
