import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";

type NavItemType = {
  label: string;
  href: string;
};

const farmerNav: NavItemType[] = [
  {
    label: "Inventory",
    href: "/inventory",
  },
];

const distributorAndProcessorNav: NavItemType[] = [
  {
    label: "Inventory",
    href: "/inventory",
  },
  {
    label: "Marketplace",
    href: "/market",
  },
];

const retailerNav: NavItemType[] = [
  {
    label: "Marketplace",
    href: "/market",
  },
];

export function NavList({ actorType }: { actorType: any }) {
  return (
    <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
      <Link
        href="/"
        className="flex items-center gap-2 text-lg font-semibold md:text-base"
      >
        <UtensilsCrossed className="h-6 w-6" />
        <span>Fork to Farm</span>
      </Link>
      <Link
        href="/"
        className="text-foreground transition-colors hover:text-foreground"
      >
        Dashboard
      </Link>
      <Link
        href="/inventory"
        className="text-muted-foreground transition-colors hover:text-foreground"
      >
        Inventory
      </Link>
      <Link
        href="/market"
        className="text-muted-foreground transition-colors hover:text-foreground"
      >
        Marketplace
      </Link>
    </nav>
  );
}

export function MobilNavList({ actorType }: { actorType: any }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <nav className="grid gap-6 text-lg font-medium">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold"
          >
            <UtensilsCrossed className="h-6 w-6" />
            <span>Farm to Fork</span>
          </Link>
          <Link href="/" className="hover:text-foreground">
            Dashboard
          </Link>
          <Link href="/inventory" className="hover:text-foreground">
            Inventory
          </Link>
          <Link href="/market" className="hover:text-foreground">
            Marketplace
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

