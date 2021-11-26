import clsx from 'clsx';
import * as React from 'react';
import {
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript
} from 'react-icons/si';

import TextGradient from '@/components/attribute/Textgr';
import Tooltip from '@/components/Tooltip';


export default function TechStack() {
  return (
    <div className='flex space-x-2 md:space-x-4 mx-auto '>
      {stacks.map((tech) => (
        <Tooltip className='bg-white border-none' key={tech.id} content={<p>{tech.tooltip}</p>}>
          <tech.icon
            key={tech.id}
            className={clsx(
              'w-10 h-10  md:w-10 md:h-10',
              'dark:hover:text-yellow-600 hover:text-yellow-600',
              'text-green-500 transform -rotate-45',
            )}
          />
        </Tooltip>
      ))}
    </div>
  );
}

const stacks = [
  {
    id: 'nextjs',
    icon: SiNextdotjs,
    tooltip: (
      <>nextjs, currently using this framework because of the static generation, dynamic paths, and built-in api.
      </>
    ),
  },
  {
    id: 'typescript',
    icon: SiTypescript,
    tooltip: (
      <>
        the reason I use this framework. I think this is the next generation of javascript
      </>
    ),
  },
  {
    id: 'tailwind',
    icon: SiTailwindcss,
    tooltip: (
      <>
        I think tailwindccs is the best choice at this time for design UI/UX because it is very simple
      </>
    ),
  },
  {
    id: 'react',
    icon: SiReact,
    tooltip: (
      <>
         Great framework for making an
        authenticated website.
      </>
    ),
  },
  {
    id: 'node',
    icon: SiNodedotjs,
    tooltip: (
      <>
        I learned all frameworks from here and this is the most experienced
      </>
    ),
  },
];
