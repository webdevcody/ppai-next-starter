import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <Link className="text-xl" href="/">
              TodoStarter
            </Link>
            <span>Copyright @ 2024 YOUR APP NAME.</span>
          </div>

          <div>
            <h2 className="text-2xl">About</h2>
            <ul className="mt-4">
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl">Legal</h2>
            <ul className="mt-4">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
