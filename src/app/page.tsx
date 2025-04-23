import Keyboard from "../components/Keyboard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Keyboard Tester</h1>
      <p className="mb-8 text-gray-400">Press any key to test your keyboard</p>
      <Keyboard />
    </main>
  );
}
