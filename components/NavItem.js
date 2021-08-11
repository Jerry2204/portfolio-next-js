import classnames from "classnames";
export default function NavItem({
  children,
  href,
  dataAos,
  dataAosDelay,
  scheme,
}) {
  const schemes = {
    light: "text-white md:text-lg text-opacity-60 hover:text-opacity-100",
    dark: "text-black",
  };

  const pickedScheme = schemes[scheme];

  return (
    <div>
      <li>
        <a
          href={href}
          className={classnames("transition font-semibold", pickedScheme)}
          data-aos={dataAos}
          data-aos-delay={dataAosDelay}
        >
          {children}
        </a>
      </li>
    </div>
  );
}
