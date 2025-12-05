import * as React from 'react';
import { cn } from '../lib/utils';

// =============================================
// TYPES
// =============================================

export interface DropdownItem {
  id: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  shortcut?: string;
  danger?: boolean;
  disabled?: boolean;
  dividerAfter?: boolean;
  items?: DropdownItem[];
  onClick?: () => void;
}

export type DropdownPlacement =
  | 'top-start' | 'top' | 'top-end'
  | 'bottom-start' | 'bottom' | 'bottom-end'
  | 'left-start' | 'left' | 'left-end'
  | 'right-start' | 'right' | 'right-end';

export interface DropdownProps {
  trigger: React.ReactNode;
  items: DropdownItem[];
  placement?: DropdownPlacement;
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  closeOnSelect?: boolean;
  isDisabled?: boolean;
  className?: string;
}

export type DropdownButtonVariant = 'solid' | 'outline' | 'ghost';
export type DropdownButtonColor = 'primary' | 'secondary' | 'neutral';
export type DropdownButtonSize = 'sm' | 'md' | 'lg';

export interface DropdownButtonProps extends Omit<DropdownProps, 'trigger'> {
  label: React.ReactNode;
  leftIcon?: React.ReactNode;
  variant?: DropdownButtonVariant;
  color?: DropdownButtonColor;
  size?: DropdownButtonSize;
}

// =============================================
// STYLES
// =============================================

const placementStyles: Record<DropdownPlacement, string> = {
  'top-start': 'bottom-full left-0 mb-1',
  'top': 'bottom-full left-1/2 -translate-x-1/2 mb-1',
  'top-end': 'bottom-full right-0 mb-1',
  'bottom-start': 'top-full left-0 mt-1',
  'bottom': 'top-full left-1/2 -translate-x-1/2 mt-1',
  'bottom-end': 'top-full right-0 mt-1',
  'left-start': 'right-full top-0 mr-1',
  'left': 'right-full top-1/2 -translate-y-1/2 mr-1',
  'left-end': 'right-full bottom-0 mr-1',
  'right-start': 'left-full top-0 ml-1',
  'right': 'left-full top-1/2 -translate-y-1/2 ml-1',
  'right-end': 'left-full bottom-0 ml-1',
};

// =============================================
// DROPDOWN MENU ITEM
// =============================================

function DropdownMenuItem({
  item,
  onSelect,
  closeOnSelect,
}: {
  item: DropdownItem;
  onSelect: () => void;
  closeOnSelect: boolean;
}) {
  const [submenuOpen, setSubmenuOpen] = React.useState(false);
  const hasSubmenu = item.items && item.items.length > 0;

  const handleClick = () => {
    if (item.disabled) return;

    if (hasSubmenu) {
      setSubmenuOpen(!submenuOpen);
    } else {
      item.onClick?.();
      if (closeOnSelect) {
        onSelect();
      }
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        onMouseEnter={() => hasSubmenu && setSubmenuOpen(true)}
        onMouseLeave={() => hasSubmenu && setSubmenuOpen(false)}
        disabled={item.disabled}
        className={cn(
          'w-full text-left px-3 py-2 text-sm flex items-center gap-2 transition-colors',
          'focus:outline-none focus:bg-gray-100',
          'hover:bg-gray-100',
          item.danger && 'text-error-600 hover:bg-error-50',
          !item.danger && 'text-gray-700',
          item.disabled && 'opacity-50 cursor-not-allowed hover:bg-transparent'
        )}
      >
        {item.icon && <span className="w-4 h-4 flex-shrink-0">{item.icon}</span>}
        <span className="flex-1">{item.label}</span>
        {item.shortcut && (
          <span className="text-xs text-gray-400 ml-auto">{item.shortcut}</span>
        )}
        {hasSubmenu && (
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        )}
      </button>

      {/* Submenu */}
      {hasSubmenu && submenuOpen && (
        <div
          className="absolute left-full top-0 ml-1 min-w-[160px] bg-white border border-gray-200 rounded-lg shadow-lg py-1"
          onMouseEnter={() => setSubmenuOpen(true)}
          onMouseLeave={() => setSubmenuOpen(false)}
        >
          {item.items!.map((subItem) => (
            <DropdownMenuItem
              key={subItem.id}
              item={subItem}
              onSelect={onSelect}
              closeOnSelect={closeOnSelect}
            />
          ))}
        </div>
      )}

      {item.dividerAfter && <div className="my-1 border-t border-gray-200" />}
    </>
  );
}

// =============================================
// DROPDOWN COMPONENT
// =============================================

export const Dropdown: React.FC<DropdownProps> = ({
  trigger,
  items,
  placement = 'bottom-start',
  isOpen: controlledOpen,
  onOpenChange,
  closeOnSelect = true,
  isDisabled = false,
  className,
}) => {
  const [internalOpen, setInternalOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;

  const setIsOpen = (open: boolean) => {
    if (controlledOpen === undefined) {
      setInternalOpen(open);
    }
    onOpenChange?.(open);
  };

  const handleToggle = () => {
    if (!isDisabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleSelect = () => {
    setIsOpen(false);
  };

  // Click outside to close
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen]);

  return (
    <div ref={containerRef} className={cn('relative inline-block', className)}>
      <div onClick={handleToggle} className={cn(isDisabled && 'cursor-not-allowed opacity-50')}>
        {trigger}
      </div>

      {isOpen && (
        <div
          className={cn(
            'absolute z-50 min-w-[160px] bg-white border border-gray-200 rounded-lg shadow-lg py-1',
            placementStyles[placement]
          )}
        >
          {items.map((item) => (
            <DropdownMenuItem
              key={item.id}
              item={item}
              onSelect={handleSelect}
              closeOnSelect={closeOnSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// =============================================
// DROPDOWN BUTTON COMPONENT
// =============================================

const buttonSizeStyles = {
  sm: 'h-8 px-3 text-sm gap-1.5',
  md: 'h-10 px-4 text-sm gap-2',
  lg: 'h-12 px-5 text-base gap-2',
};

const buttonVariantColorStyles = {
  solid: {
    primary: 'bg-primary-500 text-white hover:bg-primary-600',
    secondary: 'bg-secondary-500 text-white hover:bg-secondary-600',
    neutral: 'bg-gray-900 text-white hover:bg-gray-800',
  },
  outline: {
    primary: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-50',
    secondary: 'border-2 border-secondary-500 text-secondary-500 hover:bg-secondary-50',
    neutral: 'border-2 border-gray-300 text-gray-700 hover:bg-gray-100',
  },
  ghost: {
    primary: 'text-primary-500 hover:bg-primary-50',
    secondary: 'text-secondary-500 hover:bg-secondary-50',
    neutral: 'text-gray-700 hover:bg-gray-100',
  },
};

export const DropdownButton: React.FC<DropdownButtonProps> = ({
  label,
  leftIcon,
  variant = 'solid',
  color = 'primary',
  size = 'md',
  ...dropdownProps
}) => {
  return (
    <Dropdown
      {...dropdownProps}
      trigger={
        <button
          type="button"
          className={cn(
            'inline-flex items-center justify-center rounded-lg font-medium transition-colors',
            'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500',
            buttonSizeStyles[size],
            buttonVariantColorStyles[variant][color],
            dropdownProps.isDisabled && 'opacity-50 cursor-not-allowed'
          )}
          disabled={dropdownProps.isDisabled}
        >
          {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
          {label}
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      }
    />
  );
};
