import Image from "next/image";
import ListNavigation from "../ListNavigation/ListNavigation";

export default function Sidebar() {
  return (
    <aside className="hidden md:w-60 md:block white border border-r border-slate-200  py-8 px-6 h-screen">
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
