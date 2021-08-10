import NavItem from "./NavItem";

export default function Nav() {
  return (
    <div>
      <ul className="flex justify-center space-x-10 py-10">
        <NavItem>Profile</NavItem>
        <NavItem>Skills</NavItem>
        <NavItem>Projects</NavItem>
      </ul>
    </div>
  );
}
