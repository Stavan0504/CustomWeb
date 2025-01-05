import React from 'react'

async function ComparisionPage({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) 
{   
    const slug = (await params).slug  
  return (
    <div>{slug}</div>
  )
}

export default ComparisionPage