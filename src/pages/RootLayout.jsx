import { useState } from 'react'; 
import { useNavigate,Outlet,Link } from 'react-router-dom';
import '../App.css';

export default function RootLayout() {
  const navigate = useNavigate();
  const [buttonText,setButtonText] = useState("Login");
  return (
<div>

<ul class="sticky">
  <Link class="li-a li-left" to="/home">Home</Link>
  <Link class="li-a li-left" to="/home">About</Link>
  <Link class="li-a li-right" to="/register">{buttonText}</Link>
</ul>
  <div class="slight-padding"></div>  
  <Outlet/>
</div>
  );
}