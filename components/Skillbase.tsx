import * as React from 'react'
import { 
 SiHtml5,
 SiJavascript,
 SiCss3,
 SiNodedotjs,
 SiPhp,
 SiTypescript,
 SiReact,
 SiLaravel,
 SiJquery,
  } from 'react-icons/si';

type MainPageProps = {
  content?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
};

export default function SkillBase({
  content,
  children,
  className,
}: MainPageProps)  {
  return (
    <>
    <ul className='flex-shrink-0 grid sm:grid-cols-2  md:grid-cols-3 gap-2'>

      { frontend.map((skills) => (
        <>
        <li className='relative text-xs '>
          <div className='pl-1'>
            <skills.icons className='w-5 h-5 text-gray-400 inline-block mb-1' /> 
            <span className='p-1 text-gray-500 dark:text-gray-300'>{skills.text}</span>
            <div className='rating text-gray-400 dark:text-gray-300 absolute  top-2 right-0' 
          >{skills.rating}%</div>
          </div>
        <div className='w-full  h-4 mt-1 bg-gray-200 dark:bg-gray-600 rounded-md overflow-hidden'>
          <div className='bg-gradient-to-r from-red-600 via-yellow-500 to-green-600 h-4 w-full' style={{width: skills.rating +'%'}}>
             </div>
          </div>
        </li>
        </>
        ))}
    </ul>
  </>
  )
} 

const frontend = [

    {
    text: 'HTML5',
    icons: SiHtml5,
    rating: '100',
  },
    {
    text: 'CSS3',
    icons: SiCss3,
    rating: '92',
  },
    {
    text: 'JavaScript',
    icons: SiJavascript,
    rating: '80',
  },
  
        {
    text: 'NodeJS',
    icons: SiNodedotjs,
    rating: '60',
  },
          {
    text: 'React',
    icons: SiReact,
    rating: '75',
  },
        {
    text: 'Typescript',
    icons: SiTypescript,
    rating: '85',
  },
          {
    text: 'Jquery',
    icons: SiJquery,
    rating: '85',
  },
    {
    text: 'SiPhp',
    icons: SiPhp,
    rating: '90',
  },
      {
    text: 'Laravel',
    icons: SiLaravel,
    rating: '75',
  },
  ]
