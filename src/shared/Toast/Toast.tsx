interface Props {
  title: string;
  description: string;
}
export default function Toast({ title, description }: Props) {
  return (
    <div className="bg-green-600 rounded flex flex-col p-4">
      <h1 className="text-white text-lg font-semibold">{title}</h1>
      <p className="text-white text-base  mt-2">{description}</p>
    </div>
  );
}
