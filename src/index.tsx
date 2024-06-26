import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import ShoppingList from './Pages/ItemAddPage';
import Dashboard from './Pages/DashboardPage';
import ItemDisplay from './Components/ItemDisplayComponent';
import Error from './Pages/ErrorPage';
import NavBar from './Components/NavbarComponent';
import { ListContextProvider } from './Contexts/ListContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


const router = createBrowserRouter(
  createRoutesFromElements(
    <Fragment>
    <Route 
        path="/"
        ErrorBoundary={Error}
        element={
        <App>
          <NavBar/>
          <Outlet/> 
        </App>
        } 
        >
      <Route path="dashboard" element={
          <Dashboard>
            <Outlet/>
          </Dashboard>
          }>
            <Route path="item/:id" element={<ItemDisplay/>}/>
          </Route>
      <Route path="shopping" element={<ShoppingList/>} ></Route> 
    </Route>

    </Fragment>
  )
)

root.render(
  <React.StrictMode>
    <ListContextProvider>
      <RouterProvider router={router}/>
    </ListContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
