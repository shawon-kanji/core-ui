import * as React from 'react';
import { cn } from '../lib/utils';

// =============================================
// TYPES
// =============================================

export interface AutocompleteOption {
  value: string;
  label: string;
  disabled?: boolean;
  description?: string;
}

export type AutocompleteSize = 'sm' | 'md' | 'lg';
export type AutocompleteVariant = 'outline' | 'filled' | 'flushed';
export type AutocompleteColor = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'slate' | 'gray' | 'zinc' | 'neutral';

export interface AutocompleteProps {
  options: AutocompleteOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string, option: AutocompleteOption | null) => void;
  onInputChange?: (inputValue: string) => void;
  placeholder?: string;
  size?: AutocompleteSize;
  variant?: AutocompleteVariant;
  color?: AutocompleteColor;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isLoading?: boolean;
  isClearable?: boolean;
  minChars?: number;
  freeSolo?: boolean;
  fullWidth?: boolean;
  name?: string;
  className?: string;
  filterOption?: (option: AutocompleteOption, inputValue: string) => boolean;
  noOptionsMessage?: string;
  loadingMessage?: string;
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
  outline: 'border border-gray-300 bg-white focus-within:border-primary-500',
  filled: 'border border-transparent bg-gray-100 focus-within:bg-white focus-within:border-primary-500',
  flushed: 'border-0 border-b-2 border-gray-300 rounded-none px-0 focus-within:border-primary-500',
};

const colorStyles: Record<AutocompleteColor, string> = {
  primary: 'focus-within:ring-primary-500',
  secondary: 'focus-within:ring-secondary-500',
  success: 'focus-within:ring-success-500',
  warning: 'focus-within:ring-warning-500',
  error: 'focus-within:ring-error-500',
  info: 'focus-within:ring-info-500',
  slate: 'focus-within:ring-slate-500',
  gray: 'focus-within:ring-gray-500',
  zinc: 'focus-within:ring-zinc-500',
  neutral: 'focus-within:ring-neutral-500',
};

const highlightColorStyles: Record<AutocompleteColor, string> = {
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
// DEFAULT FILTER
// =============================================

const defaultFilterOption = (option: AutocompleteOption, inputValue: string): boolean => {
  return option.label.toLowerCase().includes(inputValue.toLowerCase());
};

// =============================================
// AUTOCOMPLETE COMPONENT
// =============================================

export const Autocomplete = React.forwardRef<HTMLInputElement, AutocompleteProps>(
  (
    {
      options,
      value,
      defaultValue: _defaultValue,
      onChange,
      onInputChange,
      placeholder = 'Type to search...',
      size = 'md',
      variant = 'outline',
      color = 'primary',
      isDisabled = false,
      isReadOnly = false,
      isLoading = false,
      isClearable = false,
      minChars = 0,
      freeSolo = false,
      fullWidth = false,
      name,
      className,
      filterOption = defaultFilterOption,
      noOptionsMessage = 'No options found',
      loadingMessage = 'Loading...',
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [inputValue, setInputValue] = React.useState('');
    const [highlightedIndex, setHighlightedIndex] = React.useState(-1);
    const containerRef = React.useRef<HTMLDivElement>(null);
    const inputRef = React.useRef<HTMLInputElement>(null);

    // Get selected option from value
    const selectedOption = options.find(opt => opt.value === value);

    // Filter options based on input
    const filteredOptions = React.useMemo(() => {
      if (!inputValue || inputValue.length < minChars) return options;
      return options.filter(opt => filterOption(opt, inputValue));
    }, [options, inputValue, filterOption, minChars]);

    // Sync input value with selected option
    React.useEffect(() => {
      if (selectedOption && !isOpen) {
        setInputValue(selectedOption.label);
      } else if (!value && !isOpen && !freeSolo) {
        setInputValue('');
      }
    }, [selectedOption, value, isOpen, freeSolo]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setInputValue(newValue);
      onInputChange?.(newValue);
      
      if (freeSolo) {
        onChange?.(newValue, null);
      }

      if (newValue.length >= minChars) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
      setHighlightedIndex(0);
    };

    const handleSelect = (option: AutocompleteOption) => {
      if (option.disabled) return;

      setInputValue(option.label);
      onChange?.(option.value, option);
      setIsOpen(false);
      setHighlightedIndex(-1);
    };

    const handleClear = (e: React.MouseEvent) => {
      e.stopPropagation();
      setInputValue('');
      onChange?.('', null);
      inputRef.current?.focus();
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (!isOpen) {
        if (e.key === 'ArrowDown' || e.key === 'Enter') {
          setIsOpen(true);
          return;
        }
        return;
      }

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setHighlightedIndex(prev =>
            prev < filteredOptions.length - 1 ? prev + 1 : 0
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setHighlightedIndex(prev =>
            prev > 0 ? prev - 1 : filteredOptions.length - 1
          );
          break;
        case 'Enter':
          e.preventDefault();
          if (highlightedIndex >= 0 && filteredOptions[highlightedIndex]) {
            handleSelect(filteredOptions[highlightedIndex]);
          }
          break;
        case 'Escape':
          setIsOpen(false);
          setHighlightedIndex(-1);
          break;
      }
    };

    // Click outside to close
    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
          setIsOpen(false);
          // Reset input to selected value on blur
          if (selectedOption) {
            setInputValue(selectedOption.label);
          } else {
            setInputValue('');
          }
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [selectedOption]);

    return (
      <div ref={containerRef} className={cn('relative', fullWidth && 'w-full', className)}>
        {name && value && (
          <input type="hidden" name={name} value={value} />
        )}

        <div
          className={cn(
            'flex items-center gap-2 rounded-lg transition-colors',
            'focus-within:ring-2 focus-within:ring-offset-0',
            sizeStyles[size],
            variantStyles[variant],
            colorStyles[color],
            isDisabled && 'opacity-50 cursor-not-allowed bg-gray-50',
            fullWidth && 'w-full'
          )}
        >
          <input
            ref={ref || inputRef}
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onFocus={() => !isReadOnly && setIsOpen(true)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            disabled={isDisabled}
            readOnly={isReadOnly}
            className={cn(
              'flex-1 bg-transparent focus:outline-none min-w-0',
              'placeholder:text-gray-400',
              isDisabled && 'cursor-not-allowed'
            )}
          />

          <div className="flex items-center gap-1 flex-shrink-0">
            {isLoading && (
              <svg className="w-4 h-4 text-gray-400 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
            )}

            {isClearable && inputValue && !isDisabled && !isLoading && (
              <button
                type="button"
                onClick={handleClear}
                className="p-0.5 rounded hover:bg-gray-200 text-gray-400 hover:text-gray-600"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}

            <svg className={cn('w-4 h-4 text-gray-400 transition-transform', isOpen && 'rotate-180')} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Dropdown */}
        {isOpen && (
          <div className="absolute z-50 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
            <div className="max-h-60 overflow-y-auto py-1">
              {isLoading ? (
                <div className="px-3 py-2 text-sm text-gray-500 text-center">
                  {loadingMessage}
                </div>
              ) : filteredOptions.length === 0 ? (
                <div className="px-3 py-2 text-sm text-gray-500 text-center">
                  {noOptionsMessage}
                </div>
              ) : (
                filteredOptions.map((option, index) => {
                  const isHighlighted = index === highlightedIndex;
                  const isSelected = option.value === value;

                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => handleSelect(option)}
                      onMouseEnter={() => setHighlightedIndex(index)}
                      className={cn(
                        'w-full text-left px-3 py-2 text-sm transition-colors',
                        'focus:outline-none',
                        isHighlighted && highlightColorStyles[color],
                        isSelected && !isHighlighted && 'bg-gray-50 font-medium',
                        !isHighlighted && !isSelected && 'text-gray-700 hover:bg-gray-100',
                        option.disabled && 'opacity-50 cursor-not-allowed'
                      )}
                      disabled={option.disabled}
                    >
                      {option.label}
                      {option.description && (
                        <span className="block text-xs text-gray-500">{option.description}</span>
                      )}
                    </button>
                  );
                })
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
);

Autocomplete.displayName = 'Autocomplete';
