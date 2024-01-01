import { Link } from 'react-router-dom';
import logo from '../../assets/logo (2).png'
const Footer = () => {
  return (
    <div className="mt-5">
      <footer className="footer p-10 bg-black text-white">
  <aside>
      <img src={logo} className='h-40 w-40' alt="" />
    <p>Tawhidul Islam Saikat<br/>web developer</p>
  </aside> 
  <nav>
    <header className="footer-title">Services</header> 
    <Link className="link link-hover">Development</Link>
    <Link className="link link-hover">Design</Link>
    <Link className="link link-hover">Marketing</Link>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <Link to='/about' className="link link-hover">About me</Link>
    <Link to='/contact' className="link link-hover">Contact</Link>
    <Link to='/project' className="link link-hover">Projects</Link>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <Link className="link link-hover">Terms of use</Link>
    <Link className="link link-hover">Privacy policy</Link>
    <Link className="link link-hover">Cookie policy</Link>
  </nav>
</footer>
    </div>
  );
};

export default Footer;
