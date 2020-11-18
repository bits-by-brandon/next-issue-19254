export default function ErrorNotFound({ text }) {
  return <span>{text}</span>;
}

export async function getStaticProps() {
  return { props: { text: "hello, 404" } };
}
