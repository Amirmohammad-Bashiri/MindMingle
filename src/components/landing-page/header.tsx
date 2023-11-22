"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "../../../public/logo.png";

const routes = [
  { title: "Features", href: "#features" },
  { title: "Reasources", href: "#resources" },
  { title: "Pricing", href: "#pricing" },
  { title: "Testimonials", href: "#testimonial" },
];

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "#",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "#",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "#",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "#",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "#",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "#",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

function Header() {
  const [path, setPath] = useState("#products");

  return (
    <header className="flex items-center justify-center p-4">
      <Link href="/" className="flex items-center w-full gap-2">
        <Image src={Logo} alt="Mindmingle Logo" width={50} height={50} />
        <span className="font-semibold dark:text-white">Mindmingle</span>
      </Link>
    </header>
  );
}

export default Header;
