import React from 'react'

export type TPostCard = {
  id: number
  title: string
}

const PostCard: React.FC<TPostCard> = (postItem: TPostCard) => {
  const { id, title } = postItem
  return (
    <div className="p-4 md:w-1/3">
      <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
        <div className="flex items-center mb-3">
          <h2 className="text-gray-900 text-lg title-font font-medium">
            {id} :: {title}
          </h2>
        </div>
      </div>
    </div>
  )
}

export default PostCard
