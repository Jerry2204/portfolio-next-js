export default function NavItem({ children, href, dataAos, dataAosDelay }) {
  return (
    <div>
      <li>
        <a
          href={href}
          className="text-white text-lg text-opacity-60 hover:text-opacity-100 transition font-semibold"
          data-aos={dataAos}
          data-aos-delay={dataAosDelay}
        >
          {children}
        </a>
      </li>
    </div>
  );
}
