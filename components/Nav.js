import NavItem from "./NavItem";
import classnames from "classnames";

export default function Nav({ dir, scheme }) {
  const dirs = {
    horizontal: "justify-center space-x-10 py-10",
    vertical: "flex-col space-y-6",
  };

  const pickedDir = dirs[dir];
  return (
    <div>
      <ul className={classnames("flex", pickedDir)}>
        <NavItem
          scheme={scheme}
          href="#profile"
          dataAos="zoom-in"
          dataAosDelay="200"
        >
          Profile
        </NavItem>
        <NavItem
          scheme={scheme}
          href="#skills"
          dataAos="zoom-in"
          dataAosDelay="300"
        >
          Skills
        </NavItem>
        <NavItem
          scheme={scheme}
          href="#projects"
          dataAos="zoom-in"
          dataAosDelay="400"
        >
          Projects
        </NavItem>
      </ul>
    </div>
  );
}
