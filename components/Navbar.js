import { useState } from "react";
import Nav from "./Nav";
import Logo from "./Logo";
import Button from "./Button";
import classnames from "classnames";

export default function Navbar() {
  const [offCanvas, setOffCanvas] = useState(false);

  return (
    <>
      <div className="flex items-center">
        <div className="w-3/12 mb-5">
          <Logo />
        </div>
        <div className="w-6/12 hidden md:block">
          <Nav scheme="light" dir="horizontal" />
        </div>
        <div className="w-3/12 text-right hidden md:block">
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
        <div className="w-9/12 md:hidden text-right">
          <img
            src="/assets/menu.svg"
            alt=""
            className="inline-block"
            onClick={() => setOffCanvas(true)}
          />
        </div>
      </div>

      <div
        className={classnames(
          "fixed bg-white z-10 top-0 h-full w-full p-10 md:hidden transition-all",
          offCanvas ? "right-0" : "-right-full"
        )}
      >
        <img
          src="/assets/x.svg"
          className="absolute top-5 right-8 w-8"
          alt=""
          onClick={() => setOffCanvas(false)}
        />
        <Nav scheme="dark" dir="vertical" />
      </div>
    </>
  );
}
