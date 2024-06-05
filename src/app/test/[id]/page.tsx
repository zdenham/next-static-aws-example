import { withDynamicParams } from '@/lib/withDynamicParams';

export const generateStaticParams = withDynamicParams();

export default function Post() {
  return <h1>Slug is</h1>;
}
