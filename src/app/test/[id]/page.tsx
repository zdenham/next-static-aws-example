import { withDynamicParams } from 'next-static-utils';
import { ID } from '@/components/ID';
import Link from 'next/link';

export const generateStaticParams = withDynamicParams();

export default function Post() {
  return (
    <>
      <h1>
        Slug is <ID />
      </h1>
      <Link href="/test/two">Go to Two</Link>
    </>
  );
}
