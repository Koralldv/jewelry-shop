import './index.css';
import {Routes, Route} from 'react-router-dom'
import {Layout} from './components/Layout'
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Offers} from './pages/Offers'
import {Contacts} from './pages/Contacts'
import {Jewelry} from './pages/Jewelry'
import {JewelrySingle} from './pages/JewelrySingle'
import {Buy} from './pages/Buy'
import {NotFound} from './pages/NotFound'
import {ScrollToTop} from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <ScrollToTop>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='about' element={<About/>} />
          <Route path='offers' element={<Offers/>} />
          <Route path='jewelry' element={<Jewelry/>} />
          <Route path='jewelry/:id' element={<JewelrySingle/>} />
          <Route path='buy' element={<Buy/>} />
          <Route path='*' element={<NotFound/>} />
          <Route path='contacts' element={<Contacts/>} />
        </Route>
      </Routes>
      </ScrollToTop>
    </div>
  );
}

export default App;
