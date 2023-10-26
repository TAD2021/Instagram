

import PostsList from "@/components/posts/PostsList"
import Sidebar from "@/components/sidebars/Sidebar"

export default function Home() {
  return (
    <div className="flex">
      <Sidebar/>
      <main className="
        flex items-center flex-col
        w-full 
        md:ml-16 lg:ml-56
        pt-6
      ">
        <PostsList />
      </main>
    </div>
  )
}
