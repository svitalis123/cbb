import React from 'react'
import KnowledgeCenter from './KnowledgeCenter'

const Resources = ({posts}) => {
  return (
    <div className='bg-neutral-99'>
      <KnowledgeCenter posts={posts} />
    </div>
  )
}

export default Resources
