import MainNav from "./shared/MainNav";
import MobileNav from "./shared/MobileNav";



export default function Header() {
  

  return (
    <>
      <header className=" sticky top-0 bg-secondary px-6">
        {/* desktop */}
        <MainNav/>

        {/* mobile */}
        <MobileNav/>
      </header>

    </>
  )
}
