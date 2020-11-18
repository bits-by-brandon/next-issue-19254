export default function Page({ text }) {
  return <span>{text}</span>;
}

export async function getStaticProps() {
  return { props: { text: "hello, page!" } };
}

export async function getStaticPaths() {
  const paths = [
    {params: {slug: ["foo"]}},
    {params: {slug: ["bar"]}},
    {params: {slug: ["foo","bar"]}},
  ];
  return { paths, fallback: false };
}
