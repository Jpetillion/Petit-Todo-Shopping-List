import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { HomePage } from './pages';
import { ROUTES } from './routes';

import { UserProvider } from './contexts'; 
import { Navigation } from './components';

import './App.css';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Navigation>
          <Router>
            <main>
              <Routes>
                <Route path={ROUTES.Home} element={<HomePage />} />
              </Routes>
            </main>
          </Router>
        </Navigation>
      </UserProvider>
    </div>
  );
}

export default App;
