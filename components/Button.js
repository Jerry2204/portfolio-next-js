export default function Button({ className, variant, children }) {
  const addClassName = className ? ` ${className}` : "";
  const variants = {
    "outline-yellow": `border border-yellow-500 text-yellow-500 py-2 px-8`,
    yellow: `bg-yellow-500 text-black py-2 px-14`,
  };

  const pickedVariant = variants[variant];

  return (
    <a
      href=""
      className={`font-semibold rounded-full inline-block ${pickedVariant}${addClassName}`}
    >
      {children}
    </a>
  );
}
