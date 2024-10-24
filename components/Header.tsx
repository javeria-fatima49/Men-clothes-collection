import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-900 text-white p-4 flex justify-between items-center py-4">
      <h1 className="text-center text-2xl flex-grow font-serif font-bold">Men Clothes Collection</h1>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
         <li>
            <Link href="/product/id">Product</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
