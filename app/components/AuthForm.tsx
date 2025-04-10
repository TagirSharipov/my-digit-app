import { Link, useSearchParams } from 'react-router';
import type { Route } from '../routes/+types/login';

export default function AuthForm() {
  const [searchParams] = useSearchParams();

  const mode = searchParams.get('mode');
  const isLogin = mode === 'login';
  const isSignup = mode === 'signup';
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold"> {isSignup ? 'Register' : 'Login'}</h1>

      <form className="flex flex-col items-center" method="post">
        <input
          type="text"
          placeholder="Email"
          className="mb-2 p-2 border rounded"
          name="email"
        />
        <input
          type="password"
          placeholder="Password"
          className="mb-2 p-2 border rounded"
          name="password"
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
          <Link to="/login?mode=signup" className="text-blue-500">
            Sign up
          </Link>
        )}
      </p>
    </div>
  );
}
/* 
/* export async function clientAction({ request }: Route.ClientActionArgs) {
  let formData = await request.formData();
  let title = formData.get('title');
  console.log('Form submitted with title:', title);
  return;
}
 

export async function action({ request }: Route.ActionArgs) {
  let formData = await request.formData();
  let title = formData.get('title');
  console.log('Form submitted with title:', title);
} */
