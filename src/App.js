import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { createBrowserRouter,createRoutesFromElements,RouterProvider, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store/store';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
import RootLayout from './components/RootLayout';

function App() {

  const router=createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Dashboard/>} />
      <Route path="/cart" element={<Cart/>} />
    </Route>
  ));
  return (
    <Provider store={store}>
    <div className='App'>
      <RouterProvider router={router}/>
    </div>
    </Provider>
  );
}

export default App;
