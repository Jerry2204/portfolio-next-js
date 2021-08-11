import NavItem from "./NavItem";

export default function Nav() {
  return (
    <div>
      <ul className="flex justify-center space-x-10 py-10">
        <NavItem href="#profile" dataAos="zoom-in" dataAosDelay="200">
          Profile
        </NavItem>
        <NavItem href="#skills" dataAos="zoom-in" dataAosDelay="300">
          Skills
        </NavItem>
        <NavItem href="#projects" dataAos="zoom-in" dataAosDelay="400">
          Projects
        </NavItem>
      </ul>
    </div>
  );
}
