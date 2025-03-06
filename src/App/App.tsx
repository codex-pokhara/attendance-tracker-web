import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from '@/components/Layout';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Button } from '@/components/ui/button';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <div><Button>Home</Button></div>,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider>
      <RouterProvider
        router={router}
      />
    </ThemeProvider>
  );
}

export default App;
