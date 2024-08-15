import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="bg-gray-800 text-white h-full fixed top-8 left-0 w-1/5">
      <nav>
        <ul>
          <li>
            <Link href="/" className="block py-2 px-4 hover:bg-gray-700">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/settings" className="block py-2 px-4 hover:bg-gray-700">
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
