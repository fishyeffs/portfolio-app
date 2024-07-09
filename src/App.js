import logo from './resources/logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import GalleryView from './views/GalleryView';
import ContactForm from './views/ContactForm';
import MenuBar from './components/MenuBar';
import About from './views/About';
import ErrorPage from "./handling/errorPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <MenuBar />
          <ContactForm />
        </div>
      ),
      errorElement: (
        <div>
          <MenuBar />
          <ErrorPage />
        </div>
      ),
    },
    {
      path: "/about",
      element: (
        <div>
          <MenuBar />
          <About />
        </div>
      ),
      errorElement: (
        <div>
          <MenuBar />
          <ErrorPage />
        </div>
      ),
    },
    {
      path: "/contact",
      element: (
        <div>
          <MenuBar />
          <ContactForm />
        </div>
      ),
      errorElement: (
        <div>
          <MenuBar />
          <ErrorPage />
        </div>
      ),
    },
    {
      path: "/gallery",
      element: (
        <div>
          <MenuBar />
          <GalleryView />
        </div>
      ),
      errorElement: (
        <div>
          <MenuBar />
          <ErrorPage />
        </div>
      ),
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
