interface ServiceProps {
  image: string;
  title: string;
  description: string;
}

export default function Service({ image, title, description }: ServiceProps) {
  return (
    <div className="bg-[#eee] shadow-md p-5">
      <div className="h-auto flex flex-col overflow-hidden">
        <img src={image} alt={title} className="w-full h-40 object-cover" />
        <div className="pt-4 text-black">
          <h2 className="text-lg font-bold mb-1">{title}</h2>
          <p className="text-xs text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
}
