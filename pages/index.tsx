import clsx from 'clsx'
import * as React from 'react'
import Link, { LinkProps } from 'next/link';
// import { InView } from 'react-intersection-observer';

import MetaSeo from '@/components/MetaSeo'
import Layout from '@/components/main/Layout'
import TextGradient from '@/components/attribute/Textgr'
import TechStack from '@/components/TechStack'
import { TypedText } from '@/components/attribute/TypedText';
import Useloaded from '@/hooks/Useloaded'

const isloaded = Useloaded();

export default function IndexPage() {
  return (
    <>
      <Layout>
      <MetaSeo />
        <main>
          <section className={clsx(
              'flex flex-col justify-center mb-10 min-h-main layout',
                isloaded && 'fade-in-start'
          )}>
            <article className='mb-4'>
              <figure className={clsx(
                    'flex flex-col justify-center overflow-hidden',
                    'md:px-8  md:text-left'
                    )}>
                <div className="space-y-3">
                  <h1 className='bg-gradient-to-r from-yellow-600 via-green-500 to-green-400 bg-clip-text text-transparent font-bold text-2xl md:text-4xl' data-fade='2'>
                    Welcome To My Profile 
                  </h1>
                  <blockquote>
                    <p className="font-light mb-10 md:text-medium text-gray-500 dark:text-gray-300" data-fade='3'>
                      Hello! You can call me <TextGradient className='font-semibold italic'>Heryan</TextGradient>.
                      I know web developer since 2015,The first thing I learned is  HTML, CSS3, Javascript PHP &amp; Web server in januari 2016. Currently November 2021, I&apos;m very interested framework for backend and frontend from Javascript 
                    </p>
                  </blockquote>
                  <figcaption className="text-md">
                  <Link href='/profile'>
                    <a className='font-bold bg-gradient-to-r from-green-800 to-green-500 text-gray-200 inline-block px-4 py-2 rounded-lg' data-fade='4'>
                     Explore My Profile
                    </a>
                    </Link>
                  </figcaption>
                </div>
              </figure>
            </article>
            <div className='my-2 pb-4 md:px-8' >
            <h2 className='text-lg font-semibold text-gray-600 dark:text-gray-300' data-fade='5'>
            The framework used:</h2>
            <TechStack />
            </div>
            <div className='pb-6 md:px-8 absolute bottom-0 left-0 right-0 text-center'>
            <TypedText
            className="text-sm font-semibold text-gray-400 my-15 inline-block"
            options={{
              strings: [

                'Fullstack Web developer',
                'React Developer',
                'Jamstack Developer',
                'Nodejs Developer',
                'PHP Developer',
                'Laravel Developer',
              ]
            }}/>
            </div>
          </section>
        </main>
      </Layout>
    </>
  )
}
