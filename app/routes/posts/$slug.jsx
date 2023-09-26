import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/post";
import invariant from "tiny-invariant";

export const loader = async ({ params }) => {
  invariant(params.slug, "expected params.slug");
  return getPost(params.slug);
};

export default function PostSlug() {
  const post = useLoaderData();
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
}
