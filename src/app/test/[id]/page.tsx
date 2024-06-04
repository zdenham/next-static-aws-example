type Params = {
  id: string;
};

type ParamsArg = {
  params: Params;
};

export default function Post({ params }: ParamsArg) {
  return <h1>Slug is {params?.id}</h1>;
}

export const generateStaticParams = async () => {
  return [
    {
      id: 'fallback',
    },
  ];
};
