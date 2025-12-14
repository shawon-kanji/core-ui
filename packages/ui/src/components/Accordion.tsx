import * as React from 'react';
import { cn } from '../lib/utils';

export interface AccordionProps {
  children: React.ReactNode;
  allowMultiple?: boolean;
  allowToggle?: boolean;
  defaultIndex?: number | number[];
  className?: string;
}

interface AccordionContextValue {
  openItems: number[];
  toggleItem: (index: number) => void;
}

const AccordionContext = React.createContext<AccordionContextValue | null>(null);

export function Accordion({
  children,
  allowMultiple = false,
  allowToggle = true,
  defaultIndex = allowMultiple ? [] : 0,
  className,
}: AccordionProps) {
  const initial = Array.isArray(defaultIndex) ? defaultIndex : [defaultIndex];
  const [openItems, setOpenItems] = React.useState<number[]>(initial);

  const toggleItem = (index: number) => {
    setOpenItems(prev => {
      const isOpen = prev.includes(index);
      if (isOpen) {
        if (!allowToggle) return prev;
        return prev.filter(i => i !== index);
      }
      if (allowMultiple) return [...prev, index];
      return [index];
    });
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem }}>
      <div className={cn('divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white', className)}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

export interface AccordionItemProps {
  index: number;
  children: React.ReactNode;
}

export function AccordionItem({ index: _index, children }: AccordionItemProps) {
  return <div>{children}</div>;
}

export interface AccordionButtonProps {
  index: number;
  children: React.ReactNode;
  className?: string;
}

export function AccordionButton({ index, children, className }: AccordionButtonProps) {
  const ctx = React.useContext(AccordionContext);
  const isOpen = ctx?.openItems.includes(index);

  if (!ctx) throw new Error('AccordionButton must be used within Accordion');

  return (
    <button
      type="button"
      aria-expanded={isOpen}
      aria-controls={`accordion-panel-${index}`}
      id={`accordion-button-${index}`}
      onClick={() => ctx.toggleItem(index)}
      className={cn(
        'flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-gray-800',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
        className
      )}
    >
      <span>{children}</span>
      <svg
        className={cn('h-4 w-4 text-gray-500 transition-transform', isOpen && 'rotate-180')}
        viewBox="0 0 24 24"
        stroke="currentColor"
        fill="none"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );
}

export interface AccordionPanelProps {
  index: number;
  children: React.ReactNode;
  className?: string;
}

export function AccordionPanel({ index, children, className }: AccordionPanelProps) {
  const ctx = React.useContext(AccordionContext);
  if (!ctx) throw new Error('AccordionPanel must be used within Accordion');

  const isOpen = ctx.openItems.includes(index);

  return (
    <div
      role="region"
      id={`accordion-panel-${index}`}
      aria-labelledby={`accordion-button-${index}`}
      hidden={!isOpen}
      className={cn('px-4 pb-4 text-sm text-gray-700', className)}
    >
      {isOpen && children}
    </div>
  );
}
