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
      <div>Top Loaders</div>

      <div className="min-h-[120vh]">
        <Outlet />
      </div>
      <div>Footer</div>
      {/* <Footer /> */}
      {/* <ScrollToTop /> */}
    </div>
  );
}

export default Layout;
