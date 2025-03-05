import { Outlet } from 'react-router-dom';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';

import { CustomSidebar } from '../CustomSidebar';
import { ThemeToggle } from '../ThemeToggler';
// import Footer from '../Footer';
// import Navbar from '../Navbar/Navbar';
// import ScrollToTop from '../ScrollToTop';
// import TopLoader from '../TopLoader/TopLoader';

function Layout() {
  return (
    <div className="relative">
      {/* <TopLoader /> */}
      {/* <Navbar /> */}
      <SidebarProvider>
        <CustomSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">
                      Building Your Application
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <ThemeToggle />
          </header>
          <div className="min-h-[60vh]">
            <Outlet />
          </div>
        </SidebarInset>
      </SidebarProvider>
      <div>Footer</div>
      {/* <Footer /> */}
      {/* <ScrollToTop /> */}
    </div>
  );
}

export default Layout;
