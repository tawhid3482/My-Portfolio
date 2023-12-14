import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import logo from '../../assets/logo (2).png'
const Footer = () => {
  return (
    <div className="mt-10">
      <footer className="footer p-10 bg-black text-white">
        <aside>
         <img src={logo} className='h-32 w-52'  alt="" />
          <p className='text-xl font-semibold ml-10'>
            Tawhidul Islam
            <br />
         <span className='text-sm'>   Web Developer</span>
          </p>
        </aside>
        <nav>
          <header className="footer-title text-xl">Contact me</header>
          <hr className='border-yellow-600 w-40' />
          <div className="grid grid-flow-col gap-6">
            <a>
              <FaLinkedin className='text-4xl text-white'></FaLinkedin>
            </a>
            <a>
              <FaFacebook className='text-4xl text-white'></FaFacebook>
            </a>
            <a>
            <FaGithub className='text-4xl text-white' ></FaGithub>
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
