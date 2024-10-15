import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import RoomDetails from './pages/RoomDetails';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms/:id" element={<RoomDetails />} />
      </Routes>
    </BrowserRouter>
  );
};
