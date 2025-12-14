import * as React from 'react';
import { cn } from '../lib/utils';

interface TabsContextValue {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  registerTab: (index: number, ref: HTMLButtonElement | null, disabled: boolean) => void;
  focusTab: (index: number) => void;
  isTabDisabled: (index: number) => boolean;
}

const TabsContext = React.createContext<TabsContextValue | null>(null);

export interface TabsProps {
  defaultIndex?: number;
  onChange?: (index: number) => void;
  children: React.ReactNode;
  className?: string;
}

export function Tabs({ defaultIndex = 0, onChange, children, className }: TabsProps) {
  const [activeIndex, setActiveIndex] = React.useState(defaultIndex);
  const tabRefs = React.useRef<Array<HTMLButtonElement | null>>([]);
  const tabDisabledState = React.useRef<Map<number, boolean>>(new Map());

  const handleSetActive = (index: number) => {
    setActiveIndex(index);
    onChange?.(index);
  };

  const registerTab = (index: number, ref: HTMLButtonElement | null, disabled: boolean) => {
    tabRefs.current[index] = ref;
    tabDisabledState.current.set(index, disabled);
  };

  const focusTab = (index: number) => {
    const target = tabRefs.current[index];
    target?.focus();
  };

  const isTabDisabled = (index: number) => {
    return tabDisabledState.current.get(index) ?? false;
  };

  return (
    <TabsContext.Provider value={{ activeIndex, setActiveIndex: handleSetActive, registerTab, focusTab, isTabDisabled }}>
      <div className={cn('w-full', className)}>{children}</div>
    </TabsContext.Provider>
  );
}

export interface TabListProps {
  children: React.ReactNode;
  className?: string;
}

export function TabList({ children, className }: TabListProps) {
  return (
    <div role="tablist" className={cn('flex items-center gap-2 border-b border-gray-200', className)}>
      {children}
    </div>
  );
}

export interface TabProps {
  children: React.ReactNode;
  index: number;
  disabled?: boolean;
  className?: string;
}

export function Tab({ children, index, disabled = false, className }: TabProps) {
  const ctx = React.useContext(TabsContext);
  const ref = React.useRef<HTMLButtonElement>(null);

  if (!ctx) throw new Error('Tab must be used within Tabs');

  const isActive = ctx.activeIndex === index;

  React.useEffect(() => {
    ctx.registerTab(index, ref.current, disabled);
  }, [ctx, index, disabled]);

  const onKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    const total = (ref.current?.parentElement?.children.length ?? 1) - 1;
    
    const findNextEnabledTab = (startIndex: number, direction: 1 | -1): number => {
      let nextIndex = startIndex;
      let attempts = 0;
      const maxAttempts = total + 1;
      
      do {
        if (direction === 1) {
          nextIndex = (nextIndex + 1) % (total + 1);
        } else {
          nextIndex = nextIndex - 1 < 0 ? total : nextIndex - 1;
        }
        attempts++;
        
        if (!ctx.isTabDisabled(nextIndex)) {
          return nextIndex;
        }
      } while (attempts < maxAttempts);
      
      return startIndex;
    };
    
    const findFirstEnabledTab = (): number => {
      for (let i = 0; i <= total; i++) {
        if (!ctx.isTabDisabled(i)) {
          return i;
        }
      }
      return 0;
    };
    
    const findLastEnabledTab = (): number => {
      for (let i = total; i >= 0; i--) {
        if (!ctx.isTabDisabled(i)) {
          return i;
        }
      }
      return total;
    };
    
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      const next = findNextEnabledTab(index, 1);
      ctx.setActiveIndex(next);
      ctx.focusTab(next);
    }
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      const next = findNextEnabledTab(index, -1);
      ctx.setActiveIndex(next);
      ctx.focusTab(next);
    }
    if (event.key === 'Home') {
      event.preventDefault();
      const first = findFirstEnabledTab();
      ctx.setActiveIndex(first);
      ctx.focusTab(first);
    }
    if (event.key === 'End') {
      event.preventDefault();
      const last = findLastEnabledTab();
      ctx.setActiveIndex(last);
      ctx.focusTab(last);
    }
  };

  return (
    <button
      ref={ref}
      role="tab"
      type="button"
      aria-selected={isActive}
      aria-controls={`panel-${index}`}
      id={`tab-${index}`}
      onClick={() => ctx.setActiveIndex(index)}
      onKeyDown={onKeyDown}
      disabled={disabled}
      tabIndex={isActive ? 0 : -1}
      className={cn(
        'relative px-3 py-2 text-sm font-medium transition-colors',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
        isActive ? 'text-primary-700' : 'text-gray-600 hover:text-gray-800',
        className
      )}
    >
      {children}
      <span
        className={cn(
          'absolute inset-x-0 -bottom-px h-0.5 transition-opacity',
          isActive ? 'bg-primary-500 opacity-100' : 'opacity-0'
        )}
      />
    </button>
  );
}

export interface TabPanelsProps {
  children: React.ReactNode;
  className?: string;
}

export function TabPanels({ children, className }: TabPanelsProps) {
  return <div className={className}>{children}</div>;
}

export interface TabPanelProps {
  children: React.ReactNode;
  index: number;
  className?: string;
}

export function TabPanel({ children, index, className }: TabPanelProps) {
  const ctx = React.useContext(TabsContext);
  if (!ctx) throw new Error('TabPanel must be used within Tabs');

  return (
    <div
      role="tabpanel"
      id={`panel-${index}`}
      aria-labelledby={`tab-${index}`}
      hidden={ctx.activeIndex !== index}
      className={cn('pt-4', className)}
    >
      {ctx.activeIndex === index && children}
    </div>
  );
}
