import Image from "next/image";
import { HtmlHTMLAttributes, useState } from "react";
import CloseIcon from "../Icon/CloseIcon";
import HamburguerIcon from "../Icon/HamburguerIcon";
import ListNavigation from "../ListNavigation/ListNavigation";

interface Props extends HtmlHTMLAttributes<HTMLElement> {}

export default function MenuMobile({ ...props }: Props) {
  const [isVisibleMenu, setVisibleMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setVisibleMenu((prev) => !prev);
  };

  return (
    <nav className=" flex w-full  bg-primary md:hidden h-12 items-center  px-6 absolute top-0 ">
      <div onClick={toggleMenu}>
        {isVisibleMenu ? (
          <CloseIcon color="#fff" />
        ) : (
          <HamburguerIcon color="#fff" />
        )}
      </div>
      {isVisibleMenu && (
        <div
          className={`w-full transition py-4 overflow-hidden  absolute left-0 px-8 bg-white top-12 h-[calc(100vh_-_48px)]`}
        >
          <div className="items-center flex">
            <Image
              width={48}
              height={48}
              layout="intrinsic"
              src="/icon.png"
              alt="En donde me vacuno"
            />
            <h1 className="ml-3 text-primary font-medium text-xl">
              En Donde Me Vacuno
            </h1>
          </div>
          <p className="text-slate-400 my-4">Menú</p>
          <ListNavigation />
        </div>
      )}
    </nav>
  );
}
