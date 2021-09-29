import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import './App.css'

import PostCardContainer from './components/postCardContainer/postCardContainer'

const queryClient = new QueryClient()

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-cover w-screen h-screen app-body">
        <section className="text-gray-700 body-font border-t border-gray-200">
          <div className="container px-5 py-5 mx-auto">
            <div className="flex flex-col text-center w-full mb-10">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mt-10">
                All Posts
              </h1>
            </div>
            <PostCardContainer />
          </div>
        </section>
      </div>
    </QueryClientProvider>
  )
}

export default App
