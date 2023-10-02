// import { hamburger } from '../assets/icons'
import { navLinks } from '../constants';

const Nav = () => {
    return (
        <header className="h-[100px]">
            <nav >
                <ul className='flex justify-center gap-20 
                items-center p-[30px]'>
                    {navLinks.map((item) => (
                        <li key={item.label}>{item.label}</li>
                    ))}
                </ul>
            </nav>
        </header>
    )
};

export default Nav;
