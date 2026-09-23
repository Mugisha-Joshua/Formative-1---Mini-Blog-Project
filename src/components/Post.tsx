import { memo } from 'react';
import styled from 'styled-components';
import type { Post as PostType } from '../types/post';
import { getPreview } from '../utils/getPreview';

interface PostProps {
  post: PostType;
}

const FEATURED_AUTHOR = 'Mugisha Joshua';

const Card = styled.article<{ $featured: boolean }>`
  margin-bottom: 1rem;
  padding: 1.25rem;
  border-radius: 8px;
  background: ${({ $featured }) => ($featured ? '#e0f2fe' : '#fff')};
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
`;

const Title = styled.h2`
  margin: 0 0 0.25rem;
  font-size: 1.25rem;
`;

const Meta = styled.p`
  margin: 0 0 0.75rem;
  font-size: 0.85rem;
  color: #64748b;
`;

function Post({ post }: PostProps) {
  return (
    <Card $featured={post.author === FEATURED_AUTHOR}>
      <Title>{post.title}</Title>
      <Meta>
        By {post.author} on {new Date(post.date).toLocaleDateString()}
      </Meta>
      <p>{getPreview(post.content)}</p>
    </Card>
  );
}

export default memo(Post);
