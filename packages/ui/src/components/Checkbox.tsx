import * as React from 'react';
import { cn } from '../lib/utils';

// =============================================
// TYPES
// =============================================

export type CheckboxSize = 'sm' | 'md' | 'lg';
export type CheckboxColor = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';

export interface CheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  indeterminate?: boolean;
  isIndeterminate?: boolean;
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  size?: CheckboxSize;
  color?: CheckboxColor;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  isInvalid?: boolean;
  name?: string;
  value?: string;
  className?: string;
}

export interface CheckboxGroupProps {
  value?: string[];
  defaultValue?: string[];
  onChange?: (value: string[]) => void;
  children?: React.ReactNode;
  options?: Array<{ label: string; value: string; helperText?: string; isDisabled?: boolean }>;
  orientation?: 'horizontal' | 'vertical';
  direction?: 'horizontal' | 'vertical';
  gap?: 'sm' | 'md' | 'lg';
  isDisabled?: boolean;
  color?: CheckboxColor;
  className?: string;
}

// =============================================
// STYLES
// =============================================

const sizeStyles = {
  sm: {
    checkbox: 'w-4 h-4',
    label: 'text-sm',
    helper: 'text-xs',
  },
  md: {
    checkbox: 'w-5 h-5',
    label: 'text-sm',
    helper: 'text-xs',
  },
  lg: {
    checkbox: 'w-6 h-6',
    label: 'text-base',
    helper: 'text-sm',
  },
};

const colorStyles: Record<CheckboxColor, string> = {
  primary: 'peer-checked:bg-primary-500 peer-checked:border-primary-500 peer-focus:ring-primary-500',
  secondary: 'peer-checked:bg-secondary-500 peer-checked:border-secondary-500 peer-focus:ring-secondary-500',
  success: 'peer-checked:bg-success-500 peer-checked:border-success-500 peer-focus:ring-success-500',
  warning: 'peer-checked:bg-warning-500 peer-checked:border-warning-500 peer-focus:ring-warning-500',
  error: 'peer-checked:bg-error-500 peer-checked:border-error-500 peer-focus:ring-error-500',
  info: 'peer-checked:bg-info-500 peer-checked:border-info-500 peer-focus:ring-info-500',
};

const indeterminateColorStyles: Record<CheckboxColor, string> = {
  primary: 'bg-primary-500 border-primary-500',
  secondary: 'bg-secondary-500 border-secondary-500',
  success: 'bg-success-500 border-success-500',
  warning: 'bg-warning-500 border-warning-500',
  error: 'bg-error-500 border-error-500',
  info: 'bg-info-500 border-info-500',
};

// =============================================
// CHECKBOX COMPONENT
// =============================================

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      checked,
      defaultChecked,
      onChange,
      indeterminate = false,
      isIndeterminate,
      label,
      helperText,
      size = 'md',
      color = 'primary',
      isDisabled = false,
      isReadOnly = false,
      isRequired = false,
      isInvalid = false,
      name,
      value,
      className,
    },
    ref
  ) => {
    const internalRef = React.useRef<HTMLInputElement>(null);
    const resolvedRef = (ref as React.RefObject<HTMLInputElement>) || internalRef;
    const finalIndeterminate = isIndeterminate !== undefined ? isIndeterminate : indeterminate;

    React.useEffect(() => {
      if (resolvedRef.current) {
        resolvedRef.current.indeterminate = finalIndeterminate;
      }
    }, [finalIndeterminate, resolvedRef]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isReadOnly) {
        onChange?.(e.target.checked);
      }
    };

    return (
      <label className={cn('inline-flex items-start gap-2 cursor-pointer', isDisabled && 'cursor-not-allowed opacity-50', className)}>
        <div className="relative flex items-center justify-center">
          <input
            ref={resolvedRef}
            type="checkbox"
            checked={checked}
            defaultChecked={defaultChecked}
            onChange={handleChange}
            disabled={isDisabled}
            readOnly={isReadOnly}
            required={isRequired}
            name={name}
            value={value}
            className="peer sr-only"
          />
          <div
            className={cn(
              'border-2 rounded transition-colors flex items-center justify-center',
              isInvalid ? 'border-error-500' : 'border-gray-300',
              'bg-white',
              'peer-focus:ring-2 peer-focus:ring-offset-2',
              'peer-checked:text-white',
              sizeStyles[size].checkbox,
              finalIndeterminate ? indeterminateColorStyles[color] : colorStyles[color]
            )}
          >
            {finalIndeterminate ? (
              <svg className="w-3/4 h-3/4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <rect x="4" y="11" width="16" height="2" rx="1" />
              </svg>
            ) : (
              <svg className="w-3/4 h-3/4 opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
        </div>
        {(label || helperText) && (
          <div className="flex flex-col">
            {label && (
              <span className={cn(
                'text-gray-700',
                sizeStyles[size].label,
                isRequired && "after:content-['*'] after:ml-0.5 after:text-error-500"
              )}>
                {label}
              </span>
            )}
            {helperText && (
              <span className={cn(
                'text-gray-500',
                sizeStyles[size].helper
              )}>
                {helperText}
              </span>
            )}
          </div>
        )}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';

// =============================================
// CHECKBOX GROUP COMPONENT
// =============================================

const CheckboxGroupContext = React.createContext<{
  value: string[];
  onChange: (val: string, checked: boolean) => void;
  isDisabled: boolean;
} | null>(null);

export function useCheckboxGroup() {
  return React.useContext(CheckboxGroupContext);
}

export function CheckboxGroup({
  value,
  defaultValue,
  onChange,
  children,
  options,
  orientation = 'vertical',
  direction,
  gap = 'md',
  isDisabled = false,
  color,
  className,
}: CheckboxGroupProps) {
  const [internalValue, setInternalValue] = React.useState<string[]>(defaultValue || []);
  const currentValue = value !== undefined ? value : internalValue;
  const finalOrientation = direction || orientation;

  const handleChange = (val: string, checked: boolean) => {
    const newValue = checked
      ? [...currentValue, val]
      : currentValue.filter(v => v !== val);

    if (value === undefined) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  const gapStyles = {
    sm: finalOrientation === 'horizontal' ? 'gap-3' : 'gap-2',
    md: finalOrientation === 'horizontal' ? 'gap-4' : 'gap-3',
    lg: finalOrientation === 'horizontal' ? 'gap-6' : 'gap-4',
  };

  return (
    <CheckboxGroupContext.Provider value={{ value: currentValue, onChange: handleChange, isDisabled }}>
      <div
        className={cn(
          'flex',
          finalOrientation === 'horizontal' ? 'flex-row flex-wrap' : 'flex-col',
          gapStyles[gap],
          className
        )}
      >
        {options ? options.map((option) => (
          <CheckboxGroupItem
            key={option.value}
            value={option.value}
            label={option.label}
            helperText={option.helperText}
            isDisabled={option.isDisabled}
            color={color}
          />
        )) : children}
      </div>
    </CheckboxGroupContext.Provider>
  );
}

// Checkbox that works within CheckboxGroup
export const CheckboxGroupItem = React.forwardRef<HTMLInputElement, Omit<CheckboxProps, 'checked' | 'onChange'> & { value: string }>(
  ({ value, isDisabled: itemDisabled, ...props }, ref) => {
    const group = useCheckboxGroup();

    if (!group) {
      console.warn('CheckboxGroupItem must be used within a CheckboxGroup');
      return null;
    }

    const isChecked = group.value.includes(value);
    const isDisabled = group.isDisabled || itemDisabled;

    return (
      <Checkbox
        ref={ref}
        {...props}
        value={value}
        checked={isChecked}
        onChange={(checked) => group.onChange(value, checked)}
        isDisabled={isDisabled}
      />
    );
  }
);

CheckboxGroupItem.displayName = 'CheckboxGroupItem';
