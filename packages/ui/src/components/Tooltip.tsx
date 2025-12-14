import * as React from 'react';
import { cn } from '../lib/utils';

export type TooltipPlacement = 'top' | 'right' | 'bottom' | 'left';

export interface TooltipProps {
  label: React.ReactNode;
  children: React.ReactElement;
  placement?: TooltipPlacement;
  openDelay?: number;
  closeDelay?: number;
  className?: string;
}

const placementStyles: Record<TooltipPlacement, string> = {
  top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
  bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
  left: 'right-full top-1/2 -translate-y-1/2 mr-2',
  right: 'left-full top-1/2 -translate-y-1/2 ml-2',
};

export function Tooltip({
  label,
  children,
  placement = 'top',
  openDelay = 100,
  closeDelay = 100,
  className,
}: TooltipProps) {
  const [open, setOpen] = React.useState(false);
  const timer = React.useRef<number | null>(null);
  const id = React.useId();

  const child = React.Children.only(children) as React.ReactElement<any>;

  React.useEffect(() => {
    return () => {
      if (timer.current) {
        window.clearTimeout(timer.current);
      }
    };
  }, []);

  const show = () => {
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setOpen(true), openDelay);
  };

  const hide = () => {
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setOpen(false), closeDelay);
  };

  const childProps = {
    onMouseEnter: (e: React.MouseEvent) => {
      child.props.onMouseEnter?.(e);
      show();
    },
    onMouseLeave: (e: React.MouseEvent) => {
      child.props.onMouseLeave?.(e);
      hide();
    },
    onFocus: (e: React.FocusEvent) => {
      child.props.onFocus?.(e);
      show();
    },
    onBlur: (e: React.FocusEvent) => {
      child.props.onBlur?.(e);
      hide();
    },
    'aria-describedby': open ? id : undefined,
  };

  return (
    <span className="relative inline-flex">
      {React.cloneElement(child, childProps)}
      {open && (
        <span
          role="tooltip"
          id={id}
          className={cn(
            'absolute z-50 whitespace-nowrap rounded-md bg-gray-900 px-2 py-1 text-xs text-white shadow-lg',
            'animate-in fade-in slide-in-from-top-2',
            placementStyles[placement],
            className
          )}
        >
          {label}
        </span>
      )}
    </span>
  );
}
