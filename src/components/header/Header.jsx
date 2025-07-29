import logo from '../../assets/logo.png';
import banner from '../../assets/banner-main.png';
import { RiCoinsFill } from "react-icons/ri";

const Header = ({ handleAddCoins, addCoins }) => {
    return (
        <header className='max-w-7xl mx-auto'>
            <nav className='flex flex-col md:flex-row md:justify-between items-center md:px-5 md:mb-6'>
                <img src={logo} alt={'Logo'} />
                <div className='flex flex-col gap-5 md:flex-row items-center md:gap-12'>
                    <ul className='flex flex-col gap-5 md:flex-row md:gap-12'>
                        <li>Home</li>
                        <li>Fixture</li>
                        <li>Teams</li>
                        <li>Scedules</li>
                    </ul>
                    <div className='flex items-center gap-2 mb-4 md:mb-0 border border-gray-200 px-3 py-2 rounded-xl'>
                        <p className='font-semibold'>{addCoins} Coins
                        </p>
                        <RiCoinsFill className='text-yellow-500 text-xl' />
                    </div>
                </div>
            </nav>
            <div className='flex flex-col space-y-5 justify-center items-center p-10 bg-radial-[at_5%_5%] from-white to-zinc-900 to-75% rounded-3xl mx-2 md:mx-0'>
                <img src={banner} alt={'Banner image'} />
                <h2 className='text-4xl text-white font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
                <p className='text-gray-200 text-2xl font-medium'>Beyond Boundaries Beyond Limits</p>
                <button onClick={handleAddCoins} className='bg-[#E7FE29] px-4 py-2 rounded-xl text-sm font-bold hover:cursor-pointer'>Claim Free Credit</button>
            </div>
        </header>
    );
};

export default Header;