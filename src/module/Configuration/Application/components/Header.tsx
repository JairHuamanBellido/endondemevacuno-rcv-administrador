interface Props {
  title: string;
  description: string;
}
export default function Header({ title, description }: Props) {
  return (
    <header>
      <div>
        <h2 className="text-2xl font-bold text-text-default">{title}</h2>
        <p className="mt-1 text-text-secondary text-sm">{description}</p>
      </div>
    </header>
  );
}
