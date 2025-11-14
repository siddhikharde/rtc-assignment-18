import { createRoot } from 'react-dom/client'
import Navbar from './navbar'
import Home from './home'
import About from './about' 
import Contact from './contact'
import Footer from './footer'

const root=createRoot(document.getElementById('root'));
const path=window.location.pathname;

if(path=="/"){
  root.render(<Home/>);
}else if(path=="/about"){
  root.render(<About/>);
}
else if(path=="/contact"){
  root.render(<Contact/>);
}
else{
  root.render(
    <div>
      <h1>Error 404:
        Page Not Found
      </h1>
    </div>
  )
}
