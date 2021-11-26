import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'
import * as React from 'react'
import { 
 SiFacebook,
 SiWhatsapp,
 SiInstagram,
 SiLinkedin
  } from 'react-icons/si';

import MetaSeo from '@/components/MetaSeo'
import Layout from '@/components/main/Layout'
import TextGradient from '@/components/attribute/Textgr'
import Skillbase from '@/components/Skillbase'


export default function ProfilePage() {
  return (
	<>
	<Layout>
    <MetaSeo templateTitle='Heryan&apos;s Portofolio' />
		<main className='md:grid md:grid-rows-3  md:grid-cols-3 md:grid-flow-col gap-2 layout'>

			<section className={clsx(
			  'row-span-2 col-span-1',
      	'flex flex-col justify-center my-4 p-4 rounded-md',
      	'bg-white dark:bg-gray-800 overflow-hidden',
 				'fade-in-start'
      )}>
				<div className={clsx(
					'flex items-center flex-row mb-2'
				)}>
					<img className="w-28 h-28 object-cover rounded-full" src="/img/me.jpg" alt="sevt" width='120' height='120' />
					<div className="mx-2 p-2 space-y-2 sm:text-left">
						<h2><TextGradient className='text-lg font-bold' data-fade='1'>Heryanto</TextGradient></h2>
						<span className='text-xs text-gray-300'data-fade='2'>Full-Stack Developer</span>
						<div className='flex flex-row' data-fade='3'>
							{ sociallink.map((sosial) => (
							<>
							<Link href={sosial.link}>
								<a className={clsx(
									sosial.color,
									'p-1 rounded-md mr-2 text-white'
								)}>
									<sosial.icons className='w-5 h-5' />
								</a>
							</Link>
							</>
							))}
						</div>
					</div>
				</div>

				<div className='bg-gray-100 dark:bg-darknight w-full rounded-md  p-4 mt-2'>
					<div className='font-bold text-sm mb-1' data-fade='4'>
            <TextGradient>About Me</TextGradient></div>
  				  <p className="text-xs text-gray-600 dark:text-gray-300" data-fade='5'>
          I was born in Cirebon, Indonesia. now I am 25 years old and still single. Im interested in playing games, rebahan and coding. oh iya, saya juga pengangguran
            </p>
				</div>
			</section>

			<section className={clsx(
				'row-span-3 col-span-2',
        'flex flex-col rounded-md bg-white dark:bg-gray-800',
        ' my-4 p-4 shadow-xl overflow-hidden',
        'fade-in-start'
      )}>
        <h3 className='flex-none text-sm font-bold py-1 mb-4 text-gray-800 dark:text-green-400 border-b border-gray-300'>Skill</h3>
			  <Skillbase />
      </section>
		</main>
	</Layout>
	</>
    )
}

  const sociallink = [
  {
  	icons: SiFacebook,
  	link : 'https://fb.me/heryanofficial',
  	color: 'bg-blue-800 '

  },
   {
  	icons: SiInstagram,
  	link : 'https://instagram.com/kakaheryan',
  	color: 'bg-gradient-to-tr from-yellow-400 via-pink-600 to-purple-500'
  },
   {
  	icons: SiWhatsapp,
  	link : 'https://wa.me/6282321736345',
  	 color: 'bg-green-500'

  },
  ]
