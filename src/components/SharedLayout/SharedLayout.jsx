import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { Outlet } from 'react-router-dom';
// import { Suspense } from 'react';
import { Main } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Main>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Outlet />
        {/* </Suspense> */}
      </Main>
      <Footer />
    </>
  );
};

export default SharedLayout;
