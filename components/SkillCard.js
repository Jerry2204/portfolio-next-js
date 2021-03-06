import classnames from "classnames";

export default function SkillCard({ name, image, level, imageClassName }) {
  const addImageClassName = imageClassName ? ` ${imageClassName}` : "";
  return (
    <div
      className="bg-white shadow-skill rounded-lg p-6 flex items-center"
      data-aos="zoom-in-down"
      data-aos-delay="200"
    >
      <img
        src={image}
        alt="Skill Image"
        className={classnames("mr-6 h-16", imageClassName)}
      />
      <div>
        <h4 className="text-lg font-semibold">{name}</h4>
        <p className="text-sm text-gray-400 font-semibold mt-1">{level}</p>
      </div>
    </div>
  );
}
