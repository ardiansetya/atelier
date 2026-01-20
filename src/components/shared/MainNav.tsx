import { Link } from "@tanstack/react-router";
import { Search, ShoppingBag, User2Icon } from "lucide-react";
import { Button } from "../ui/button";

const MainNav = () => {
  return (
    <div className="container h-16 mx-auto hidden md:flex items-center justify-between">
      <h1 className=" text-2xl uppercase font-semibold">atelier</h1>

      <div className="flex items-center gap-x-8 ">
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
        </Link>
      </div>

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
};

export default MainNav;
