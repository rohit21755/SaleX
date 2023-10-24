import Link from 'next/link'
import {FaRegUserCircle} from 'react-icons/fa'
const Navbar = () => {
    return(<>
        <div className="navbar p-12">
        <div className="flex justify-between border-[1px] border-gray-400 px-2 rounded-md">
            <div className="font-bold">
                SalesX
            </div>
            <div className="flex space-x-4">
                <Link href="#">
                    <FaRegUserCircle className='text-2xl'/>
                </Link>
                {/* <Link href="#">Services</Link>
                <Link href="#">About Us</Link>
                <Link href="#">Contact</Link> */}
            </div>
        </div>
        </div>
    </>)
}
export default Navbar