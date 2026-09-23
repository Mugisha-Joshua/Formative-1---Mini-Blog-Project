import type { Post as PostType } from '../types/post';
import Post from './Post';

const posts: PostType[] = [
  {
    id: 1,
    title: 'Why We Moved Our Frontend to Vite',
    author: 'Aline Uwase',
    content:
      'Vite starts the dev server almost instantly because it serves native ES modules and only bundles for production, which saved our team minutes every day.',
    date: '2026-09-18T09:00:00',
  },
  {
    id: 2,
    title: 'Typing Props the Right Way',
    author: 'Mugisha Joshua',
    content:
      'Describing component props with TypeScript interfaces catches missing or wrong values before the code even runs, and it makes components easier to reuse.',
    date: '2026-09-20T14:30:00',
  },
  {
    id: 3,
    title: 'Keys Matter When Rendering Lists',
    author: 'Eric Habimana',
    content:
      'React uses the key prop to track list items between renders, so a stable unique id keeps updates fast and avoids strange bugs when items change order.',
    date: '2026-09-22T11:15:00',
  },
];

function PostList() {
  return (
    <section>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </section>
  );
}

export default PostList;
