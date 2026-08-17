import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/posts";

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link className="post-card" href={`/${post.slug}/`}>
      <Image
        src={post.image}
        alt={post.imageAlt}
        width={560}
        height={315}
        loading="lazy"
      />
      <div>
        <div className="post-meta">
          <span className="tag">{post.tag}</span>
          <span>{post.date}</span>
        </div>
        <h3>{post.title}</h3>
        <p className="excerpt">{post.excerpt}</p>
        <span className="post-meta">Read guide &rarr;</span>
      </div>
    </Link>
  );
}