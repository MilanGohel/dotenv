import { Link } from 'react-router-dom';

const ComingSoon = () => {
  return (
    <div className="h-96 bg-gray-100 flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold text-white mb-4">Coming Soon</h1>
      <p className="text-lg mb-6 text-indigo-300">
        We&apos;re working hard to bring you something amazing. Stay tuned!
      </p>
      <Link
        to="/"
        className="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-700"
      >
        Return to Home
      </Link>
    </div>
  );
}

export default ComingSoon;
