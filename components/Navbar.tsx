import Image from "next/image"
import Link from "next/link"
import NavItems from "./NavItems"

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image 
            src="images/logo.svg" 
            alt="Logo" 
            width={46} 
            height={44} 
          />
        </div>
      </Link>
      <div className="flex items-center gap-7">
        
        <NavItems />
        <p>Sign in</p>
      </div>
    </nav>
  )
}

export default Navbar
