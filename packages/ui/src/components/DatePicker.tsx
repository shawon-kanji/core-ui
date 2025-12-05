import * as React from 'react';
import { cn } from '../lib/utils';
import { Input, type InputProps } from './Input';
import { Icon } from './Icon';

// =============================================
// TYPES
// =============================================

export type DatePickerColor = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'slate' | 'gray' | 'zinc' | 'neutral';

export interface DatePickerProps extends Omit<InputProps, 'value' | 'onChange' | 'type'> {
  selected?: Date | null;
  onChange?: (date: Date | null) => void;
  dateFormat?: string;
  minDate?: Date;
  maxDate?: Date;
  color?: DatePickerColor;
}

// =============================================
// DATE PICKER COMPONENT
// =============================================

export const DatePicker = React.forwardRef<HTMLDivElement, DatePickerProps>(
  (
    {
      selected,
      onChange,
      dateFormat = 'yyyy-MM-dd',
      minDate,
      maxDate,
      color = 'primary',
      className,
      placeholder = 'Select date',
      ...props
    },
    ref
  ) => {
    // This is a simplified implementation using native date input for now
    // In a real library, you'd want a custom calendar popup
    
    const formatDate = (date: Date | null): string => {
      if (!date) return '';
      return date.toISOString().split('T')[0];
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      if (!value) {
        onChange?.(null);
        return;
      }
      const date = new Date(value);
      if (!isNaN(date.getTime())) {
        onChange?.(date);
      }
    };

    return (
      <div ref={ref} className={cn('relative', className)}>
        <Input
          type="date"
          value={formatDate(selected || null)}
          onChange={handleChange}
          placeholder={placeholder}
          min={minDate ? formatDate(minDate) : undefined}
          max={maxDate ? formatDate(maxDate) : undefined}
          leftElement={<Icon name="calendar" size="sm" className="text-gray-400" />}
          {...props}
        />
      </div>
    );
  }
);

DatePicker.displayName = 'DatePicker';
