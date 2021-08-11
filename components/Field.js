export default function Field({ label, name, type }) {
  const formControlClassName =
    "bg-transparent border border-gray-400 py-2 px-5 w-full";

  return (
    <div className="mb-6">
      <label htmlFor={name} className="block mb-1 font-semibold text-sm">
        {label}
      </label>
      {type === "text" && (
        <input
          type={type}
          name={name}
          id={name}
          className={formControlClassName}
        />
      )}
      {type === "email" && (
        <input
          type={type}
          name={name}
          id={name}
          className={formControlClassName}
        />
      )}
      {type === "textarea" && (
        <textarea
          name={name}
          id={name}
          rows="5"
          className={formControlClassName}
        ></textarea>
      )}
    </div>
  );
}
