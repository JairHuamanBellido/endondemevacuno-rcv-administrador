import Link from "next/link";
import { useRouter } from "next/router";
import { HtmlHTMLAttributes } from "react";
import { ConfigurationIcon, DashboardIcon } from "..";

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
export default function ListNavigation({ ...props }: Props) {
  const router = useRouter();

  // const isActive = 8
  const dynamicStyleLink = (path: string) => {
    return path === router.pathname ? "bg-primary rounded" : "";
  };

  const dynamicStyleText = (path: string) => {
    return path === router.pathname ? "text-white" : "text-slate-700";
  };
  const dynamicIconStyle = (path: string) => {
    return path === router.pathname ? "#fff" : "#334155";
  };

  return (
    <ul>
      {Links.map((e) => (
        <li key={e.id} className={`my-4 cursor-pointer`}>
          <Link href={e.path}>
            <a
              className={`flex p-2 text-inherit items-center text-sm ${dynamicStyleLink(
                e.path
              )}`}
            >
              <e.icon color={dynamicIconStyle(e.path)} />
              <span className={`ml-3 ${dynamicStyleText(e.path)}`}>
                {e.label}
              </span>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
