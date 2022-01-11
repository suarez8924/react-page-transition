import Navigation from './components/navigation/navigation';

import { Route, Routes } from 'react-router-dom';

import Homepage from './pages/homepage';
import WonderPage from './pages/wonder-page';

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Homepage />} />
      <Route path="/wonders/:wonder" exact element={<WonderPage />} />
    </Routes>
  );
}

export default App;
