import React from "react";
import PageHome from "../App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "../pages/error";
import UpdatePage from "../pages/edit";

function App() {
  const [initializing, setInitializing] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState(null);

  React.useEffect(() => {
    setTimeout(() => {
      setInitializing(false);
    }, 1000);
  }, []);

  if (errorMessage) return <div>Error: {errorMessage}</div>;
  if (initializing) return <div>Loading...</div>;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<PageHome />} />
        <Route path="/listartist">
          <Route index element={<PageHome />} />
          <Route path="/listartist/:id" element={<UpdatePage />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
