import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Blog, Home, Header, Latest, Development } from "./Components";

export const App = () => {
  const navigationPages = [
    { id: 1, path: "/", element: <Home /> },
    { id: 2, path: "/blog", element: <Blog /> },
    { id: 3, path: "/latest", element: <Latest /> },
    { id: 4, path: "/development", element: <Development /> },
  ];

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          {navigationPages.map(({ path, element }) => (
            <Route path={path} element={element} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
};
