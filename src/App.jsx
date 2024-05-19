import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import SharedLayout from 'components/SharedLayout/SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        {/* <SharedLayout> */}
        <Route index element={<HomePage />} />

        {/* </SharedLayout> */}
      </Route>
    </Routes>
  );
};
