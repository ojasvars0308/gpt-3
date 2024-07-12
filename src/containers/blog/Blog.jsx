import React from 'react'
import './blog.css'

import { Article } from '../../components'
import {blog01,blog02,blog03,blog04,blog05} from './imports'

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening,We are blogging about it.</h1>
      </div>

      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article imgUrl={blog01} date="Jan 01, 2023" title="GPT-3 and Open AI is the future. Let us explore how it is?" />
        </div>

        <div className='gpt3__blog-container_groupB'>
          <Article imgUrl={blog02} date="Feb 07, 2023" title="Unlocking the Power of GPT-3: A Comprehensive Guide." />
          <Article imgUrl={blog03} date="Mar 21, 2023" title="Exploring the Depths of OpenAI's GPT-3: A Blogger's Perspective" />
          <Article imgUrl={blog04} date="Sep 11, 20223" title="Demystifying GPT-3: A Blogger's Journey into Natural Language Processing" />
          <Article imgUrl={blog05} date="Aug 03, 2023" title="The Future of Conversational AI: A Deep Dive into OpenAI's Latest Innovations" />
        </div>
      </div>
    </div>
  )
}

export default Blog