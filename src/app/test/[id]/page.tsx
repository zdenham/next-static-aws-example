import { withDynamicParams } from '@/lib/withDynamicParams';
import { ID } from '@/components/ID';

export const generateStaticParams = withDynamicParams();

export default function Post() {
  return (
    <h1>
      Slug is <ID />
    </h1>
  );
}
