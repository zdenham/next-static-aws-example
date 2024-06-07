import { withDynamicParams } from 'next-static-utils';
import BlogPage from './BlogPage';

export const generateStaticParams = withDynamicParams();

export default function Page() {
  return <BlogPage />;
}
