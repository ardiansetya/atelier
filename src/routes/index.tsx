import { Button } from "@/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Image } from "@unpic/react";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({ component: App });

function App() {
  // const trpc = useTRPC()

  return (
    <div className="relative">
      <div className="absolute">
        <Image
          layout="fullWidth"
          height={90}
          src="../src/assets/hero-fashion.webp"
          alt="Banner"
          priority
          className="object-cover object-top"
        />

        <div className="absolute inset-y-1/4 px-16 space-y-4">
          <h1 className="font-medium text-7xl tracking-wide">
            New Season <br />
            Essentials
          </h1>
          <p className="max-w-md text-muted-foreground">
            Timeless pieces designed for the modern wardrobe. Discover our
            latest collection of elevated basics.
          </p>

          <Button size="lg" asChild>
            <Link to="/products" className="flex items-center">
              Shop Collection
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
