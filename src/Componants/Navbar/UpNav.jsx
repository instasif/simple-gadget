import { BsFacebook, BsWhatsapp, BsTwitter } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';


const UpNav = () => {
    return (
        <section className="navbar bg-gray-50 shadow flex items-center justify-end">
          <div className="flex gap-3 lg:gap-6 lg:pr-10">
            <BsFacebook className="text-2xl lg:text-3xl font-bold text-blue-700 hover:text-blue-400 cursor-pointer"/>
            <BsWhatsapp className="text-2xl lg:text-3xl font-bold text-green-600 hover:text-green-300 cursor-pointer"/>
            <BsTwitter className="text-2xl lg:text-3xl font-bold text-sky-400 hover:text-sky-300 cursor-pointer"/>
            <SiGmail className="text-2xl lg:text-3xl font-bold text-red-500 hover:text-red-300 cursor-pointer"/>
          </div>
        </section>
    );
};

export default UpNav;