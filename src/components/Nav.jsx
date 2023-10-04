// import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';
// import { labIcon } from "../assets/icons";

const Nav = () => {
    return (
        <header className=' w-full'>
            <nav className='flex justify-between items-center max-container'>
                <div className='flex text-white'>
                    <img
                        href="../assets/icons/labIcon.svg"
                        width={25}
                        height={25}
                    />
                    <p className='ml-6 font-bold text-[25px]'>Diamondl<span>ab</span></p>
                </div>
                <ul className='flex justify-center gap-20 
                items-center p-[30px] text-white m-4 font-semibold text-[21px]'>
                    {navLinks.map((item) => (
                        <li key={item.label}>{item.label}</li>
                    ))}
                </ul>
                <button className="bg-button p-[20px] text-[17px] text-white
                rounded-lg leading-5 hover:bg-changeButton font-medium">Book a lab visit</button>
                <div className='hidden max-lg:block'>
                    <img
                        // src={hamburger}
                        alt="hamburger"
                        width={25}
                        height={25}
                    />
                </div>
            </nav>

        </header>
    )
};

export default Nav;
