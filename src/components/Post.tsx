import type { Post as PostType } from '../types/post';
import { getPreview } from '../utils/getPreview';

interface PostProps {
  post: PostType;
}

function Post({ post }: PostProps) {
  return (
    <article>
      <h2>{post.title}</h2>
      <p>
        By {post.author} on {new Date(post.date).toLocaleDateString()}
      </p>
      <p>{getPreview(post.content)}</p>
    </article>
  );
}

export default Post;
