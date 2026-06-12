import { cn } from '@/lib/utils/cn';

type Cols = 1 | 2 | 3 | 4;
type Gap = 'sm' | 'md' | 'lg';

const colClasses: Record<Cols, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-2 sm:grid-cols-2 lg:grid-cols-4',
};

const gapClasses: Record<Gap, string> = {
  sm: 'gap-3',
  md: 'gap-6 sm:gap-8',
  lg: 'gap-8 sm:gap-12',
};

interface GridProps {
  children: React.ReactNode;
  cols?: Cols;
  gap?: Gap;
  className?: string;
}

export function Grid({ children, cols = 3, gap = 'md', className }: GridProps) {
  return (
    <div className={cn('grid', colClasses[cols], gapClasses[gap], className)}>
      {children}
    </div>
  );
}
