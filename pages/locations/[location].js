import Head from "next/head";
import Home from "..";
import Link from "next/link";

const locations = [
  "brussels",
  "paris-canal-st-martin",
  "paris-sentier",
  "paris-south-pigalle",
];

export default function Location({ params }) {
  const { location } = params;

  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Home />
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: locations.map((location) => `/locations/${location}`),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return { props: { params } };
}
