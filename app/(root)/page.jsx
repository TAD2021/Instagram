

import PostsList from "@/components/posts/PostsList"
import Recommend from "@/components/recommend/Recommend"
import Sidebar from "@/components/sidebars/Sidebar"

export default function Home() {
  return (
    <div className="flex">
      <Sidebar/>
      <main className="
        flex justify-center
        w-full 
        md:ml-16 lg:ml-56
        pt-6
      ">
        <PostsList />
        <Recommend />
      </main>
    </div>
  )
}
