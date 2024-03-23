//import './App.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import HomePage from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import RootLayout from './pages/RootLayout';
import AppRootLayout from './pages/AppRootLayout';
import Stories from './pages/Stories';
import CreateStory from './pages/CreateStory';


//sign-in in adn other pages from here.
//https://mui.com/material-ui/getting-started/templates/

//routing lesson
//https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/35733852#overview

//main page from below
//https://github.com/app-generator/sample-react-mui-introduction/tree/main/src/components


const router = createBrowserRouter([
  {path : '/', element : <RootLayout/>, children:[
    {index : true, path : 'home',element:<HomePage/>},
    {path  : 'login',element:<Login/>},
    {path  : 'register',element:<Register/>}
  ]},
  {path : '/app', element : <AppRootLayout/>, children:[
    {path : 'my-stories',element:<Stories/>},
    {path  : 'discover',element:<Stories/>},
    {path  : 'create',element:<CreateStory/>}
  ]}
]);

function App() {
  return (
    <RouterProvider router = {router} />
  )
}

export default App
