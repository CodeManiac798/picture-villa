import { cn } from '@/lib/utils/cn';

type Ratio = '1/1' | '4/3' | '3/4' | '16/9' | '9/16' | '3/2' | '2/3' | '5/4';

const ratioStyles: Record<Ratio, string> = {
  '1/1':  'aspect-square',
  '4/3':  'aspect-[4/3]',
  '3/4':  'aspect-[3/4]',
  '16/9': 'aspect-video',
  '9/16': 'aspect-[9/16]',
  '3/2':  'aspect-[3/2]',
  '2/3':  'aspect-[2/3]',
  '5/4':  'aspect-[5/4]',
};

interface AspectRatioProps {
  ratio?: Ratio;
  children: React.ReactNode;
  className?: string;
}

export function AspectRatio({ ratio = '3/2', children, className }: AspectRatioProps) {
  return (
    <div className={cn('relative overflow-hidden', ratioStyles[ratio], className)}>
      {children}
    </div>
  );
}
