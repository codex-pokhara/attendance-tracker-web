import { Outlet } from 'react-router-dom';

// import Footer from '../Footer';
// import Navbar from '../Navbar/Navbar';
// import ScrollToTop from '../ScrollToTop';
// import TopLoader from '../TopLoader/TopLoader';

function Layout() {
  return (
    <div className="relative">
      {/* <TopLoader /> */}
      {/* <Navbar /> */}
      <div>Top Loader</div>
      <div>Navbar</div>
      <div className="min-h-[60vh]">
        <Outlet />
      </div>
      <div>Footer</div>
      {/* <Footer /> */}
      {/* <ScrollToTop /> */}
    </div>
  );
}

export default Layout;
