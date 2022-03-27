import classesIf from "../../../../utils/dynamicClasses/classesIf";
import tailwindCssBuilder from "../../../../utils/tailwindCssBuilder/tailwindCssBuilder";

interface Props {
  onSelectTab(label: string): void;
  labels: string[];
  currentSection: string;
}
export default function Tabs({ labels, onSelectTab, currentSection }: Props) {
  return (
    <div className="flex">
      {labels.map((e, i) => (
        <p
          onClick={() => onSelectTab(e)}
          className={tailwindCssBuilder(
            "p-2 rounded transition cursor-pointer mr-3",
            classesIf(
              currentSection === e,
              "text-primary font-medium bg-[#FF1A5912]"
            ),
            classesIf(
              currentSection !== e,
              "text-slate-500 bg-none hover:text-slate-700"
            )
          )}
          key={i}
        >
          {e}
        </p>
      ))}
    </div>
  );
}
