import { PostList } from "./PostList"
import { SectionHeader } from "@/components"

export interface IPost {
  id: number
  date: string
  title: string
  description: string
}

export const Blog = async () => {
  return (
    <section id="blog" className="section">
      <div className="container mx-auto">
        <SectionHeader pretitle="Our Blog" title="Latest Posts" />
        <PostList />
      </div>
    </section>
  )
}
