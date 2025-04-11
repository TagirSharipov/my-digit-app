import { Link, Outlet, useLocation } from 'react-router';
import { getAuthToken } from '~/lib/auth';
import type { Route } from './+types/layout';

export default function Layout({ loaderData }: Route.ComponentProps) {
  const location = useLocation(); // Get the current location

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-2xl font-bold">My App Layout</h1>
      </header>
      <nav className="bg-gray-100 p-4">
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/"
              className={`hover:text-blue-500 ${
                isActive('/') ? 'text-blue-500 font-bold' : ''
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/welcome"
              className={`hover:text-blue-500 ${
                isActive('/welcome') ? 'text-blue-500 font-bold' : ''
              }`}
            >
              Welcome page
            </Link>
          </li>
          <li>
            {loaderData.isAuthenticated ? (
              <Link
                to="/logout"
                className={`hover:text-blue-500 ${
                  isActive('/logout') ? 'text-blue-500 font-bold' : ''
                }`}
              >
                Logout
              </Link>
            ) : (
              <a
                href="/login"
                className={`hover:text-blue-500 ${
                  isActive('/login') ? 'text-blue-500 font-bold' : ''
                }`}
              >
                Login
              </a>
            )}
          </li>
        </ul>
      </nav>
      <main className="flex-grow p-4">
        <Outlet />
      </main>
    </div>
  );
}

export async function clientLoader() {
  if (getAuthToken() === null) {
    return { isAuthenticated: false };
  }
  return { isAuthenticated: true };
}
