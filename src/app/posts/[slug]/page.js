import { getAllPosts } from "@/lib/posts"
import MarkdownIt from "markdown-it";

const md = new MarkdownIt();

async function fetchPosts(slug) {
  const posts = getAllPosts();
  return posts.find(post => post.slug === slug);
}

export default async function Post({ params }) {
  const post = await fetchPosts(params.slug);

  if (!post) {
    return <div>Post not found</div>
  }

  const htmlConverter = md.render(post.content);

  return <article>
    <h1> {post.title} </h1>
    <p> {post.date} </p>
    <div dangerouslySetInnerHTML={{ __html: htmlConverter }} />
  </article>
}