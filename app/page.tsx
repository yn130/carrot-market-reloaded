import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-6">
      <div className="my-auto flex flex-col items-center gap-2 *:font-medium">
        <span className="text-9xl">🥕</span>
        <h1 className="text-4xl">Carrot</h1>
        <h2 className="text-2xl">Welcome to Carrot Market!</h2>
      </div>
      <div className="flex flex-col items-center gap-3 w-full">
        <Link href="/create-account" className="primary-btn text-lg py-2.5">Start!</Link>
        <div className="flex gap-2">
          <span>Do you already have an account? </span>
          <Link href="/login" className="hover:underline">Login</Link>
        </div>
      </div>
    </div>
  );
}
