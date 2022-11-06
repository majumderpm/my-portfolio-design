import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './component/Home/Home';
import About from './component/About';
import Services from './component/Services';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>
    },
    {
      path: '/about',
      element: <About></About>
    },
    {
      path: '/services',
      element: <Services></Services>
    },
    // {
    //   path: '/services',
    //   element: <Services></Services>
    // },
  ])


  return (
    <>
      <RouterProvider router={router} />
      
    </>
  );
}

export default App;
