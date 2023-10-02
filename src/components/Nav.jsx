// import { hamburger } from '../assets/icons'
import { navLinks } from '../constants';

const Nav = () => {
    return (
        <header>
            <nav >
                <ul className='flex justify-center gap-20 
                items-center m-[20px]'>
                    {navLinks.map((item) => (
                        <li key={item.label}>{item.label}</li>
                    ))}
                </ul>
            </nav>
        </header>
    )
};

export default Nav;
