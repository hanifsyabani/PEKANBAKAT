export default function HeaderGray({ title }: { title: string }) {
  return (
    <div >
      <h1 className="text-3xl font-extrabold text-[#A4A4A4] z-10">{title}</h1>
      <div className="bg-gray-200 w-[9rem] h-2 absolute top-8 rounded-full"></div>
    </div>
  );
}