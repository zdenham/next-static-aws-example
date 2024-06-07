import { FALLBACK_STRING, useDynamicParams } from 'next-static-utils';

export default function BlogPage() {
  const { slug } = useDynamicParams();

  if (slug === FALLBACK_STRING) return null;

  return <div></div>;
}
