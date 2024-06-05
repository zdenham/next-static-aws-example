import { withDynamicParams } from '@/lib/withDynamicParams';

type Params = {
  id: string;
};

type ParamsArg = {
  params: Params;
};

export const generateStaticParams = withDynamicParams();

export default function Post({ params }: ParamsArg) {
  return <h1>Slug is {params?.id}</h1>;
}
