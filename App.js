import {BrowserRouter,Route,Routes}from 'react-router-dom';

import Layout from './Layout';

import Home from './Home';
import Blogs from './Blogs';

import Contact from './Contact';



function App() {

 return (

  <BrowserRouter>

  <Routes>

   <Route path="/"element={<Layout/>}>

   <Route index element={<Home/>}/>

   <Route path="blogs" element={<Blogs/>}/>

   <Route path="contact" element={<Contact/>}/>


   </Route>

   </Routes>

   </BrowserRouter>

 );

}
export default App;
