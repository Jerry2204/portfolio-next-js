import Nav from "./Nav";
import Logo from "./Logo";
import Button from "./Button";

export default function Navbar() {
  return (
    <div className="flex items-center">
      <div className="w-3/12">
        <Logo />
      </div>
      <div className="w-6/12">
        <Nav />
      </div>
      <div className="w-3/12 text-right">
        <Button
          href="#contact"
          variant="outline-yellow"
          className="hover:border-none hover:text-black hover:bg-yellow-500 shadow-lg hover:shadow-none"
          pill
          dataAos="zoom-in"
        >
          Contact
        </Button>
      </div>
    </div>
  );
}
