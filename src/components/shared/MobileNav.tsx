import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Link } from "@tanstack/react-router"
import { MenuIcon, Search, ShoppingBag, User2Icon } from "lucide-react"

const MobileNav = () => {
  return (
    <div className="md:hidden flex items-center justify-between">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle className="uppercase text-2xl">Atelier</SheetTitle>
          </SheetHeader>
          <div className="grid flex-1 auto-rows-min gap-6 px-4">
            <Link className="hover:text-black/70 font-semibold" to="/shop">
              Shop
            </Link>
            <Link className="hover:text-black/70 font-semibold" to="/men">
              Men
            </Link>
            <Link className="hover:text-black/70 font-semibold" to="/women">
              Women
            </Link>
            <Link className="hover:text-black/70 font-semibold" to="/new">
              New Arrival
            </Link>{" "}
          </div>
          <SheetFooter>
            <Link to="/login"></Link>
            <Button type="submit">Login</Button>
           

          </SheetFooter>
        </SheetContent>
      </Sheet>

      <div className="flex items-center gap-x-2">
        <Button variant="ghost">
          <Search />
        </Button>
        <Button variant="ghost">
          <ShoppingBag />
        </Button>
        <Button variant="ghost">
          <User2Icon />
        </Button>
      </div>
    </div>
  );
}

export default MobileNav