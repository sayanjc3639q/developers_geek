import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome to the Developer's Hub!
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Content will be loaded here soon...
        </p>
      </div>
    </main>
  );
}