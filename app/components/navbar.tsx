import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
  
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  Squares2X2Icon,
  XMarkIcon,
  Bars3Icon,
  HomeIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import { LanguageIcon } from "@heroicons/react/20/solid";
import Link from "next/link";


const NAV_MENU = [
  {
    name: "Home",
    icon: HomeIcon,
    href:'/'
  },
  {
    name: "About",
    icon: CommandLineIcon,
    href:'/about'
  },
  {
    name: "Services",
    icon: LanguageIcon,
    href: "/services",
  },
  {
    name: "Contact Us",
    icon: PhoneIcon,
    href: "/contact",
  },
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Link href={`${href}`}>
      <Typography
      placeholder=''
      // as="a"
      // href={href || "#"}
      // target={href ? "_blank" : "_self"}
      variant="paragraph"
      color="gray"
      className="flex items-center gap-2 font-medium text-gray-900"
      >
        {children}
      </Typography>
        </Link>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <MTNavbar placeholder='' shadow={false} fullWidth className="border-b-2 py-3 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
      
        <Typography placeholder='' color="red" className="text-lg text-black font-bold">
          MFU Technology
        </Typography>
          <hr  className="rotate-90 text-black"  />
        <ul className=" hidden items-center gap-8 pb-3 lg:flex">
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
              <Icon className="h-5 w-5" />
              {name}
            </NavItem>
          ))}
        </ul>
        <div className="hidden items-center gap-5 lg:flex">
          <Button placeholder='' variant="text">Sign In</Button>
          <a href="#" target="_blank">
            <Button placeholder='' color="gray">blocks</Button>
          </a>
        </div>
        <IconButton
        placeholder=''
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, icon: Icon }) => (
              <NavItem key={name}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
          <div className="mt-6 mb-4 flex items-center gap-2">
            <Button placeholder='' variant="text">Sign In</Button>
            {/* <a href="" target="_blank">
              <Button placeholder='' color="gray">blocks</Button>
            </a> */}
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
