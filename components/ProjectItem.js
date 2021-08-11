export default function ProjectItem({ name, description, image }) {
  return (
    <article>
      <img
        src={image}
        alt="Portfolio Image"
        className="w-full rounded-lg h-[310px] object-cover"
      />
      <h3 className="text-lg font-bold mb-1 mt-4">{name}</h3>
      <p className="text-justify text-gray-500">{description}</p>
    </article>
  );
}
