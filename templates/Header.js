import Link from "next/link";

export default function Header() {
  return (
    <>
      <header>
        <div className="container">
          <Link legacyBehavior href="/">
          Website
          </Link>
          <nav>
            <ul>
              <li>
                <Link legacyBehavior href="/page-1">
                  Page-1
                </Link>
              </li>

              <li>
                <Link legacyBehavior  href="/page-2">
                  Page-2
                </Link>
              </li>
              <li>
                <Link  legacyBehavior href="/page-3">
                  Page-3
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/page4">
                  Page-4
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
