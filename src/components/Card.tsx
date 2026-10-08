interface CardProps {
  title: string;
  category: string;
  client: string;
  image?: string;
}

export default function Card({
  title,
  category,
  client,
  image = "https://via.placeholder.com/300",
}: CardProps) {
  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow duration-200 flex flex-col justify-between">
      <div>
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="p-5">
          {/* Category */}
          <span className="inline-block bg-slate-100 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded mb-2 uppercase tracking-wide">
            {category}
          </span>

          {/* Project Title */}
          <h3 className="font-[family-name:var(--font-oswald)] text-xl font-bold text-gray-900 mb-2">
            {title}
          </h3>
        </div>
      </div>

      {/* Client Name Footer */}
      <div className="p-5 pt-0 border-t border-slate-100 mt-auto text-xs text-gray-500">
        <span><strong>Client:</strong> {client}</span>
      </div>
    </div>
  );
}