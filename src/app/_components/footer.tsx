export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl">About</h2>
            <ul className="mt-4">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl">Services</h2>
            <ul className="mt-4">
              <li>
                <a href="#">Web Development</a>
              </li>
              <li>
                <a href="#">Mobile Development</a>
              </li>
              <li>
                <a href="#">SEO</a>
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
              <li>
                <a href="#">Refund Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
