import * as React from 'react';
import { cn } from '../lib/utils';

// =============================================
// TYPES
// =============================================

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
  group?: string;
  description?: string;
}

export type SelectSize = 'sm' | 'md' | 'lg';
export type SelectVariant = 'outline' | 'filled' | 'flushed';
export type SelectColor = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'slate' | 'gray' | 'zinc' | 'neutral';

export interface SelectProps {
  options: SelectOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string, option: SelectOption) => void;
  placeholder?: string;
  size?: SelectSize;
  variant?: SelectVariant;
  color?: SelectColor;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isInvalid?: boolean;
  isSearchable?: boolean;
  isClearable?: boolean;
  fullWidth?: boolean;
  name?: string;
  className?: string;
}

export interface MultiSelectProps {
  options: SelectOption[];
  value?: string[];
  defaultValue?: string[];
  onChange?: (value: string[], options: SelectOption[]) => void;
  placeholder?: string;
  size?: SelectSize;
  variant?: SelectVariant;
  color?: SelectColor;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isInvalid?: boolean;
  isSearchable?: boolean;
  isClearable?: boolean;
  fullWidth?: boolean;
  name?: string;
  className?: string;
  max?: number;
}

// =============================================
// STYLES
// =============================================

const sizeStyles = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-4 text-base',
};

const variantStyles = {
  outline: 'border border-gray-300 bg-white focus:border-primary-500',
  filled: 'border border-transparent bg-gray-100 focus:bg-white focus:border-primary-500',
  flushed: 'border-0 border-b-2 border-gray-300 rounded-none px-0 focus:border-primary-500',
};

const colorStyles: Record<SelectColor, string> = {
  primary: 'focus:ring-primary-500',
  secondary: 'focus:ring-secondary-500',
  success: 'focus:ring-success-500',
  warning: 'focus:ring-warning-500',
  error: 'focus:ring-error-500',
  info: 'focus:ring-info-500',
  slate: 'focus:ring-slate-500',
  gray: 'focus:ring-gray-500',
  zinc: 'focus:ring-zinc-500',
  neutral: 'focus:ring-neutral-500',
};

const selectedColorStyles: Record<SelectColor, string> = {
  primary: 'bg-primary-50 text-primary-700',
  secondary: 'bg-secondary-50 text-secondary-700',
  success: 'bg-success-50 text-success-700',
  warning: 'bg-warning-50 text-warning-700',
  error: 'bg-error-50 text-error-700',
  info: 'bg-info-50 text-info-700',
  slate: 'bg-slate-50 text-slate-700',
  gray: 'bg-gray-50 text-gray-700',
  zinc: 'bg-zinc-50 text-zinc-700',
  neutral: 'bg-neutral-50 text-neutral-700',
};

// =============================================
// SELECT COMPONENT
// =============================================

export const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      options,
      value,
      defaultValue,
      onChange,
      placeholder = 'Select...',
      size = 'md',
      variant = 'outline',
      color = 'primary',
      isDisabled = false,
      isReadOnly = false,
      isInvalid = false,
      isSearchable = false,
      isClearable = false,
      fullWidth = false,
      name,
      className,
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [internalValue, setInternalValue] = React.useState(defaultValue || '');
    const [searchQuery, setSearchQuery] = React.useState('');
    const containerRef = React.useRef<HTMLDivElement>(null);

    const currentValue = value !== undefined ? value : internalValue;
    const selectedOption = options.find(opt => opt.value === currentValue);

    const filteredOptions = isSearchable && searchQuery
      ? options.filter(opt =>
          opt.label.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : options;

    // Group options by group property
    const groupedOptions = React.useMemo(() => {
      const groups: Record<string, SelectOption[]> = {};
      const ungrouped: SelectOption[] = [];

      filteredOptions.forEach(opt => {
        if (opt.group) {
          if (!groups[opt.group]) groups[opt.group] = [];
          groups[opt.group].push(opt);
        } else {
          ungrouped.push(opt);
        }
      });

      return { groups, ungrouped };
    }, [filteredOptions]);

    const handleSelect = (option: SelectOption) => {
      if (option.disabled) return;

      if (value === undefined) {
        setInternalValue(option.value);
      }
      onChange?.(option.value, option);
      setIsOpen(false);
      setSearchQuery('');
    };

    const handleClear = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (value === undefined) {
        setInternalValue('');
      }
      onChange?.('', { value: '', label: '' });
    };

    // Click outside to close
    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
          setIsOpen(false);
          setSearchQuery('');
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
      <div ref={containerRef} className={cn('relative', fullWidth && 'w-full', className)}>
        {name && currentValue && (
          <input type="hidden" name={name} value={currentValue} />
        )}

        <button
          ref={ref as unknown as React.RefObject<HTMLButtonElement>}
          type="button"
          onClick={() => !isDisabled && !isReadOnly && setIsOpen(!isOpen)}
          className={cn(
            'flex items-center justify-between gap-2 rounded-lg transition-colors',
            'focus:outline-none focus:ring-2 focus:ring-offset-0',
            sizeStyles[size],
            variantStyles[variant],
            isInvalid ? 'border-error-500 focus:border-error-500 focus:ring-error-500' : colorStyles[color],
            isDisabled && 'opacity-50 cursor-not-allowed bg-gray-50',
            fullWidth && 'w-full'
          )}
        >
          <span className={cn(!selectedOption && 'text-gray-400')}>
            {selectedOption?.label || placeholder}
          </span>
          <div className="flex items-center gap-1">
            {isClearable && currentValue && !isDisabled && (
              <span
                onClick={handleClear}
                className="p-0.5 rounded hover:bg-gray-200 text-gray-400 hover:text-gray-600"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </span>
            )}
            <svg className={cn('w-4 h-4 text-gray-400 transition-transform', isOpen && 'rotate-180')} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>

        {/* Dropdown */}
        {isOpen && (
          <div className="absolute z-50 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
            {isSearchable && (
              <div className="p-2 border-b border-gray-100">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="w-full px-3 py-1.5 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500"
                  autoFocus
                />
              </div>
            )}
            <div className="max-h-60 overflow-y-auto py-1">
              {groupedOptions.ungrouped.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleSelect(option)}
                  className={cn(
                    'w-full text-left px-3 py-2 text-sm transition-colors',
                    'focus:outline-none focus:bg-gray-100',
                    option.value === currentValue && selectedColorStyles[color],
                    option.value !== currentValue && 'text-gray-700 hover:bg-gray-100',
                    option.disabled && 'opacity-50 cursor-not-allowed'
                  )}
                  disabled={option.disabled}
                >
                  {option.label}
                  {option.description && (
                    <span className="block text-xs text-gray-500">{option.description}</span>
                  )}
                </button>
              ))}
              {Object.entries(groupedOptions.groups).map(([group, opts]) => (
                <div key={group}>
                  <div className="px-3 py-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wider bg-gray-50">
                    {group}
                  </div>
                  {opts.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => handleSelect(option)}
                      className={cn(
                        'w-full text-left px-3 py-2 text-sm transition-colors',
                        'focus:outline-none focus:bg-gray-100',
                        option.value === currentValue && selectedColorStyles[color],
                        option.value !== currentValue && 'text-gray-700 hover:bg-gray-100',
                        option.disabled && 'opacity-50 cursor-not-allowed'
                      )}
                      disabled={option.disabled}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              ))}
              {filteredOptions.length === 0 && (
                <div className="px-3 py-2 text-sm text-gray-500 text-center">
                  No options found
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

// =============================================
// MULTI SELECT COMPONENT
// =============================================

export const MultiSelect = React.forwardRef<HTMLDivElement, MultiSelectProps>(
  (
    {
      options,
      value,
      defaultValue,
      onChange,
      placeholder = 'Select...',
      size: _size = 'md',
      variant = 'outline',
      color = 'primary',
      isDisabled = false,
      isReadOnly = false,
      isInvalid = false,
      isSearchable = false,
      isClearable = false,
      fullWidth = false,
      name,
      className,
      max,
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [internalValue, setInternalValue] = React.useState<string[]>(defaultValue || []);
    const [searchQuery, setSearchQuery] = React.useState('');
    const containerRef = React.useRef<HTMLDivElement>(null);

    const currentValue = value !== undefined ? value : internalValue;
    const selectedOptions = options.filter(opt => currentValue.includes(opt.value));

    const filteredOptions = isSearchable && searchQuery
      ? options.filter(opt =>
          opt.label.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : options;

    const handleToggle = (option: SelectOption) => {
      if (option.disabled) return;

      const isSelected = currentValue.includes(option.value);
      let newValue: string[];

      if (isSelected) {
        newValue = currentValue.filter(v => v !== option.value);
      } else {
        if (max && currentValue.length >= max) return;
        newValue = [...currentValue, option.value];
      }

      if (value === undefined) {
        setInternalValue(newValue);
      }

      const newOptions = options.filter(opt => newValue.includes(opt.value));
      onChange?.(newValue, newOptions);
    };

    const handleRemove = (optionValue: string, e: React.MouseEvent) => {
      e.stopPropagation();
      const newValue = currentValue.filter(v => v !== optionValue);

      if (value === undefined) {
        setInternalValue(newValue);
      }

      const newOptions = options.filter(opt => newValue.includes(opt.value));
      onChange?.(newValue, newOptions);
    };

    const handleClear = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (value === undefined) {
        setInternalValue([]);
      }
      onChange?.([], []);
    };

    // Click outside to close
    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
          setIsOpen(false);
          setSearchQuery('');
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
      <div ref={containerRef} className={cn('relative', fullWidth && 'w-full', className)}>
        {name && currentValue.map(v => (
          <input key={v} type="hidden" name={name} value={v} />
        ))}

        <button
          ref={ref as unknown as React.RefObject<HTMLButtonElement>}
          type="button"
          onClick={() => !isDisabled && !isReadOnly && setIsOpen(!isOpen)}
          className={cn(
            'flex items-center justify-between gap-2 rounded-lg transition-colors min-h-[2.5rem]',
            'focus:outline-none focus:ring-2 focus:ring-offset-0',
            'px-3 py-1.5',
            variantStyles[variant],
            isInvalid ? 'border-error-500 focus:border-error-500 focus:ring-error-500' : colorStyles[color],
            isDisabled && 'opacity-50 cursor-not-allowed bg-gray-50',
            fullWidth && 'w-full'
          )}
        >
          <div className="flex flex-wrap gap-1 flex-1">
            {selectedOptions.length > 0 ? (
              selectedOptions.map(opt => (
                <span
                  key={opt.value}
                  className={cn(
                    'inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium',
                    selectedColorStyles[color]
                  )}
                >
                  {opt.label}
                  {!isDisabled && !isReadOnly && (
                    <button
                      type="button"
                      onClick={(e) => handleRemove(opt.value, e)}
                      className="hover:text-gray-900"
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </span>
              ))
            ) : (
              <span className="text-gray-400 text-sm">{placeholder}</span>
            )}
          </div>
          <div className="flex items-center gap-1 flex-shrink-0">
            {isClearable && currentValue.length > 0 && !isDisabled && (
              <span
                onClick={handleClear}
                className="p-0.5 rounded hover:bg-gray-200 text-gray-400 hover:text-gray-600"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </span>
            )}
            <svg className={cn('w-4 h-4 text-gray-400 transition-transform', isOpen && 'rotate-180')} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>

        {/* Dropdown */}
        {isOpen && (
          <div className="absolute z-50 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
            {isSearchable && (
              <div className="p-2 border-b border-gray-100">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="w-full px-3 py-1.5 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500"
                  autoFocus
                />
              </div>
            )}
            <div className="max-h-60 overflow-y-auto py-1">
              {filteredOptions.map((option) => {
                const isSelected = currentValue.includes(option.value);
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleToggle(option)}
                    className={cn(
                      'w-full text-left px-3 py-2 text-sm transition-colors flex items-center gap-2',
                      'focus:outline-none focus:bg-gray-100',
                      'text-gray-700 hover:bg-gray-100',
                      option.disabled && 'opacity-50 cursor-not-allowed'
                    )}
                    disabled={option.disabled}
                  >
                    <span className={cn(
                      'w-4 h-4 rounded border flex items-center justify-center flex-shrink-0',
                      isSelected
                        ? 'bg-primary-500 border-primary-500 text-white'
                        : 'border-gray-300'
                    )}>
                      {isSelected && (
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </span>
                    {option.label}
                  </button>
                );
              })}
              {filteredOptions.length === 0 && (
                <div className="px-3 py-2 text-sm text-gray-500 text-center">
                  No options found
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
);

MultiSelect.displayName = 'MultiSelect';
