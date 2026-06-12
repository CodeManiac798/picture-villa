import { cn } from '@/lib/utils/cn';

type MaxWidth = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';

const maxWidthClasses: Record<MaxWidth, string> = {
  sm:   'max-w-2xl',
  md:   'max-w-4xl',
  lg:   'max-w-6xl',
  xl:   'max-w-7xl',
  '2xl': 'max-w-[1440px]',
  full: 'max-w-none',
};

interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: MaxWidth;
  className?: string;
  style?: React.CSSProperties;
  as?: 'div' | 'section' | 'article' | 'main' | 'header' | 'footer';
}

export function Container({
  children,
  maxWidth = 'xl',
  className,
  style,
  as: Tag = 'div',
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        'mx-auto w-full',
        'px-5 sm:px-8 lg:px-12',
        maxWidthClasses[maxWidth],
        className,
      )}
      style={style}
    >
      {children}
    </Tag>
  );
}
