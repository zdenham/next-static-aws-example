import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="test/banana">Go to /test/banana</Link>
    </div>
  );
}
