import { FALLBACK_STRING, useDynamicParams } from 'next-static-utils';

export default function BlogPage() {
  const { slug } = useDynamicParams();

  if (slug === FALLBACK_STRING) return null;

  return (
    <div>
      <h1>This is a dynamic page with slug: {slug}</h1>
      <p>
        Dynamic content can be fetched from a server client side to hydrate the
        page. You can refresh the page, and it will not 404, even though no page
        at /{slug}.html exists. This works due to cloudfront function routing
        logic and a fallback route generated via the{' '}
        <a href="https://github.com/zdenham/next-static-utils" target="_blank">
          next-static-utils
        </a>{' '}
        cli .
      </p>
    </div>
  );
}
