import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Storage, Home, Header, Latest, Development, FileAll, FileSave, FileGet } from "./Components";

export const App = () => {
  const navigationPages = [
    { id: 1, path: "/", element: <Home /> },
    { id: 2, path: "/storage", element: <Storage /> },
    { id: 3, path: "/latest", element: <Latest /> },
    { id: 4, path: "/development", element: <Development /> },
    { id: 5, path: "/storage/all", element: <FileAll /> },
    { id: 6, path: "/storage/upload", element: <FileSave /> },
    { id: 7, path: "/storage/download", element: <FileGet /> },
  ];

  return (
      <BrowserRouter>
          <Header />
          <Routes>
            {navigationPages.map(({ id, path, element }) => (
              <Route key={id} path={path} element={element} />
            ))}
          </Routes>
      </BrowserRouter>
  );
};
