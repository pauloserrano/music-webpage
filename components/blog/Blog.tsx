import { PostList } from "./PostList"
import { SectionHeader } from "@/components"

export interface IPost {
  id: number
  date: string
  title: string
  description: string
}

const getPosts = async (): Promise<IPost[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DB_BASE_URL}/posts`)
  return res.json()
}

export const Blog = async () => {
  const posts = await getPosts()
  
  return (
    <section id="blog" className="section">
      <div className="container mx-auto">
        <SectionHeader pretitle="Our Blog" title="Latest News" />
        <PostList posts={posts} />
      </div>
    </section>
  )
}
