export default function NavItem({ children }) {
  return (
    <div>
      <li>
        <a
          href="#"
          className="text-white text-lg text-opacity-60 font-semibold"
        >
          {children}
        </a>
      </li>
    </div>
  );
}
