import * as React from 'react'

import MetaSeo from '@/components/MetaSeo'
import Layout from '@/components/main/Layout'
import TextGradient from '@/components/attribute/Textgr'


export default function BlogPage() {

  return (
    <>
      <Layout>
        <MetaSeo templateTitle='My Blog'/>
        <main>
          <section className='flex flex-row justify-center text-center mb-10 min-h-main layout'>
            <TextGradient className='text-3xl text-center font-bold my-auto p-4'> Blog For Next Project </TextGradient>
          </section>
    </main>
    </Layout>
    </>
  )
}


const blogpost = [
{
  title: 'Next JS program',
  tags: 'nextjs',
  tanggal: '20 februari 2021',
  description: 'Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.'
}, 
{
  title: 'Peps program',
  tags: 'Peps',
  tanggal: '20 februari 2021',
  description: 'Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.'
},
{
  title: 'Html program',
  tags: 'Html',
  tanggal: '20 februari 2021',
  description: 'Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.'
},
{
  title: 'React program',
  tags: 'react',
  tanggal: '20 februari 2021',
  description: 'Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.'
}
]
