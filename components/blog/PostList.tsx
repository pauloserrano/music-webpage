"use client"

import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { fadeIn } from '@/variants'
import { IPost } from './Blog'

interface PostListProps {
  posts: IPost[]
}

export const PostList = ({ posts }: PostListProps) => {
  function formatDate(date: string): string {
    const d = new Date(date)
    return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`
  }

  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      className='flex flex-col items-center'
    >
      <div className='flex flex-col xl:flex-row justify-between gap-12 py-10 xl:pt-16 xl:pb-24 border-t border-white/10'>
        {posts.slice(3).map((post) => (
          <div key={post.id} className='flex-1'>
            <div className='text-accent font-bold mb-1'>{formatDate(post.date)}</div>
            <div className='text-xl font-medium mb-4'>{post.title}</div>
            <p className='text-white/30 mb-6 font-light'>{post.description}</p>
            <Link href="#" className='flex items-center gap-x-2 group'>
              <span>Read more</span>
              <BsArrowRight className='text-xl group-hover:translate-x-1 transition-all' />
            </Link>
          </div>
        ))}
      </div>
      <button className='btn btn-lg btn-accent'>View all posts</button>
    </motion.div>
  )
}
