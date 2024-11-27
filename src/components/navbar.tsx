import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex justify-between items-center">
        <li>
          <Link href="/" className="text-white text-lg font-bold">
            Estimator
          </Link>
        </li>
        <li>
          <ul className="flex space-x-6">
            <li>
              <Link href="/services" className="text-white">Services</Link>
            </li>
            <li>
              <Link href="/about" className="text-white">About</Link>
            </li>
            <li>
              <Link href="/contact" className="text-white">Contact</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
