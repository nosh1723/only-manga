import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';

import { DefaultLayout } from './component/Layout';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component
            const Layout = DefaultLayout
            return <Route key={index} path={route.path} element={<Layout><Page></Page></Layout>} />
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
