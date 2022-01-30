import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { HtmlHTMLAttributes } from "react";
import { ConfigurationIcon, DashboardIcon } from "..";
import ListNavigation from "../ListNavigation/ListNavigation";
const defaultTheme = require("tailwindcss/defaultTheme");

interface Props extends HtmlHTMLAttributes<HTMLElement> {}

const Links = [
  { id: 1, path: "/", label: "Dashboard", icon: DashboardIcon },
  {
    id: 2,
    path: "/configuration",
    label: "Configuración",
    icon: ConfigurationIcon,
  },
];
export default function Sidebar({ ...props }: Props) {
  return (
    <aside className="hidden md:w-60 md:block white  py-8 px-6 h-screen">
      <Image
        width={64}
        height={64}
        src="/icon.png"
        alt="En donde me vacuno"
        layout="intrinsic"
      />
      <h1 className="text-gray-500">
        Hola! <br />
        <span className="text-primary font-medium text-xl">Jair Orlando</span>
      </h1>
      <nav className="mt-6">
        <ListNavigation />
      </nav>
    </aside>
  );
}
