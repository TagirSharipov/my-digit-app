import { Link, useSearchParams } from 'react-router';

export default function AuthForm() {
  const [searchParams] = useSearchParams();

  const mode = searchParams.get('mode');
  const isLogin = mode === 'login';
  const isSignup = mode === 'register';
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold"> {isSignup ? 'Register' : 'Login'}</h1>

      <form className="flex flex-col items-center" method="post">
        <input
          type="text"
          placeholder="Username"
          className="mb-2 p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="mb-2 p-2 border rounded"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          {isSignup ? 'Register' : 'Login'}
        </button>
      </form>
      <p className="mt-4">
        {isSignup ? (
          <Link to="/login?mode=login" className="text-blue-500">
            I have an account
          </Link>
        ) : (
          <Link to="/login?mode=register" className="text-blue-500">
            Sign up
          </Link>
        )}
      </p>
    </div>
  );
}
