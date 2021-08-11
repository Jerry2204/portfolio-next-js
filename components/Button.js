import classnames from "classnames";
export default function Button({
  className,
  variant,
  children,
  pill,
  href,
  dataAos,
}) {
  const variants = {
    "outline-yellow": `border border-yellow-500 text-yellow-500 py-2 px-8`,
    yellow: `bg-yellow-500 hover:bg-yellow-600 text-black py-2 px-14`,
    blue: `bg-submitButton hover:bg-opacity-90 text-white py-2 px-14`,
  };

  const pickedVariant = variants[variant];

  return (
    <a
      href={href}
      className={classnames(
        "transition font-semibold inline-block",
        pill && "rounded-full",
        pickedVariant,
        className
      )}
      data-aos={dataAos}
      data-aos-delay="200"
    >
      {children}
    </a>
  );
}
