import { createRoot } from 'react-dom/client';

import {
    BrowserRouter,
    Routes,
    Route
  } from 'react-router-dom';
import Example from './pages/Example';
import Home from './pages/Home';

  function App() {
    return (
        <div>
          <BrowserRouter>
            <Routes>
              <Route path='/example' element={<Example/>} />    
              <Route path='/' element={<Home/>} />                            
            </Routes>
          </BrowserRouter>
          
        </div>
    );
}

  const container = document.getElementById('app');
  const root = createRoot(container);
  root.render(<App />);