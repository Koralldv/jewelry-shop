import './index.css';
import {Routes, Route} from 'react-router-dom'
import {Layout} from './components/Layout'
import {Home} from './pages/Home'
import {About} from './pages/About'
import {NotFound} from './pages/NotFound'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='about' element={<About/>} />
          <Route path='*' element={<NotFound/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
