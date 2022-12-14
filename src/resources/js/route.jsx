import { createRoot } from 'react-dom/client';

import {
    BrowserRouter,
    Routes,
    Route
  } from 'react-router-dom';
import Example from './pages/Example';

  function App() {
    return (
        <div>
          <BrowserRouter>
            <Routes>
              <Route path='/example' element={<Example/>} />                
            </Routes>
          </BrowserRouter>
          
        </div>
    );
}

  const container = document.getElementById('app');
  const root = createRoot(container);
  root.render(<App />);