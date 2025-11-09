// Main application

// Main imports
import { createBrowserRouter, RouterProvider } from "react-router";

// Pages
import CreateAccount from "./components/createAccountForm";
import ListUsers from "./components/listUsers";
import LoginForm from "./components/loginForm";
import "./App.css";

// Setting up react router
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm />,
  },
  {
    path: "/add",
    element: <CreateAccount />,
  },
  {
    path: "/list",
    element: <ListUsers />,
  },
]);

// App page
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

// import { BrowserRouter, Routes, Route } from "react-router";

//   // <BrowserRouter>
//   //   <Routes>
//   //     <Route path="/" element={<ListUsers />} />
//   //   </Routes>
//   // </BrowserRouter>
