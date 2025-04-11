import {
  Form,
  Link,
  useActionData,
  useNavigation,
  useSearchParams,
} from 'react-router';
import type { Route } from '../routes/+types/login';

export default function AuthForm() {
  const data = useActionData();
  const [searchParams] = useSearchParams();
  const navigation = useNavigation();

  const mode = searchParams.get('mode');
  const isSignup = mode === 'signup';
  const isSubmitting = navigation.state === 'submitting';

  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-4xl font-bold mb-4">
        {' '}
        {isSignup ? 'Register' : 'Login'}
      </h1>
      {data && data.errors && (
        <ul>
          {(Object.values(data.errors) as string[]).map(error => (
            <li key={error} className="text-red-500">
              {error}
            </li>
          ))}
        </ul>
      )}
      {data && data.message && <p className="text-red-500">{data.message}</p>}
      <Form className="flex flex-col items-center" method="post">
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
        <button
          type="submit"
          disabled={isSubmitting}
          className="p-2 bg-blue-500 text-white rounded mt-4 w-full"
        >
          {isSubmitting ? 'Wait...' : 'Send'}
        </button>
      </Form>
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
