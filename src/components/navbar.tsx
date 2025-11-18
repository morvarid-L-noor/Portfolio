import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex gap-6 p-4 border-b">
      <Link href="/">Home</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/experience">Experience</Link>
      <Link href="/skills">Skills</Link>
      <Link href="/publications">Publications</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
