import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from 'react-icons/fa';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <div className="absolute bottom-0 w-full">
      <h1 className="w-full text-2xl font-bold text-yellow-400 uppercase max-[1000px]:text-xl max-[700px]:text-base">
        Our links
      </h1>
      <ul className="w-full pt-10 flex justify-around">
        <li className="cursor-pointer">
          <Link href="">
            <FaFacebook className="my-0 mx-auto text-4xl max-[768px]:text-2xl text-yellow-500 max-[350px]:text-base" />
          </Link>
          <p className="max-[400px]:text-[12px]">Facebook</p>
        </li>
        <li className="cursor-pointer">
          <Link href="">
            <FaTwitter className="my-0 mx-auto text-4xl max-[768px]:text-2xl text-yellow-500 text-center max-[350px]:text-base" />
          </Link>
          <p className="max-[400px]:text-[12px]">Tweeter</p>
        </li>
        <li className="cursor-pointer">
          <Link href="">
            <FaInstagram className="my-0 mx-auto text-4xl max-[768px]:text-2xl text-yellow-500 text-center max-[350px]:text-base" />
          </Link>
          <p className="max-[400px]:text-[12px]">Instagram</p>
        </li>
        <li className="cursor-pointer">
          <Link href="">
            <FaPinterest className="my-0 mx-auto text-4xl max-[768px]:text-2xl text-yellow-500 max-[350px]:text-base" />
          </Link>

          <p className="max-[400px]:text-[12px]">Pinterest</p>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
