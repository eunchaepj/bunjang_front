import './App.css';
import Top from './components/Top';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
function App() {
    return (
        <>
            <Top />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    );
}

export default App;
