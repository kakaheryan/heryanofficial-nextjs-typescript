import clsx from 'clsx';
import * as React from 'react';

type AccentType = React.ComponentPropsWithoutRef<'span'>;

export default function TextGradient({ children, className }: AccentType) {
  return (
    <span
      className={clsx(
        className,
        'bg-clip-text text-transparent',
        'bg-gradient-color from-primary-300 via-primary-300 to-primary-400',
      )}>
      {children}
    </span>
  );
}
