// Main application

// Main imports
import { createBrowserRouter, RouterProvider } from "react-router";
// import { BrowserRouter, Routes, Route } from "react-router";

// Pages
import LoginForm from "./components/loginForm";
import ListUsers from "./components/listUsers";
import "./App.css";

// Setting up react router
const router = createBrowserRouter([
  {
    path: "/",
    element: <ListUsers />,
  },
  {
    path: "/add",
    element: <LoginForm />,
  },
]);

// App page
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
  //   // <BrowserRouter>
  //   //   <Routes>
  //   //     <Route path="/" element={<ListUsers />} />
  //   //   </Routes>
  //   // </BrowserRouter>
}

export default App;
