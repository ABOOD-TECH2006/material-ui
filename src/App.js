import Create from "./pages/Create/Create";
import Home from "./pages/Home/Home";
import Root from "./pages/Root";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
 const router = createBrowserRouter(
   createRoutesFromElements(
     <Route path="/" element={<Root />}>
      <Route index element={<Home/>}></Route>
      <Route path="create" element={<Create/>}></Route>
       {/* <Route path="dashboard" element={<Dashboard />} /> */}
       {/* ... etc. */}
     </Route>
   )
 );
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
