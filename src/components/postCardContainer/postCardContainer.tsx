import React from 'react'
import { useQuery } from 'react-query'

import { apiBaseUrl } from '../../config'

import PostCard, { TPostCard } from '../postCard/postCard'

const PostCardContainer: React.FC = () => {
  const { data } = useQuery('posts', () => fetch(`${apiBaseUrl}/posts`).then(res => res.json()))
  const posts = data as TPostCard[]

  return (
    <div className="flex flex-wrap -m-4">
      {posts && posts.map((postItem: TPostCard) => <PostCard key={postItem.id} {...postItem} />)}
    </div>
  )
}

export default PostCardContainer
