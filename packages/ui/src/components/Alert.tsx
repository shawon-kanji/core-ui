import * as React from 'react';
import { cn } from '../lib/utils';

// =============================================
// ALERT TYPES
// =============================================

export type AlertStatus = 'info' | 'success' | 'warning' | 'error';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Status/color scheme */
  status?: AlertStatus;

  /** Visual variant */
  variant?: 'subtle' | 'solid' | 'left-accent' | 'top-accent';

  /** Alert title */
  title?: string;

  /** Closable alert */
  isClosable?: boolean;

  /** Close handler */
  onClose?: () => void;

  /** Custom icon */
  icon?: React.ReactNode;

  /** Hide default icon */
  hideIcon?: boolean;
}

// =============================================
// ICONS
// =============================================

const InfoIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
  </svg>
);

const SuccessIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

const WarningIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
  </svg>
);

const ErrorIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
  </svg>
);

const CloseIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

const statusIcons: Record<AlertStatus, React.ReactNode> = {
  info: <InfoIcon />,
  success: <SuccessIcon />,
  warning: <WarningIcon />,
  error: <ErrorIcon />,
};

// =============================================
// STYLES
// =============================================

const subtleStyles: Record<AlertStatus, string> = {
  info: 'bg-info-50 text-info-800',
  success: 'bg-success-50 text-success-800',
  warning: 'bg-warning-50 text-warning-800',
  error: 'bg-error-50 text-error-800',
};

const solidStyles: Record<AlertStatus, string> = {
  info: 'bg-info-600 text-white',
  success: 'bg-success-600 text-white',
  warning: 'bg-warning-500 text-white',
  error: 'bg-error-600 text-white',
};

const leftAccentStyles: Record<AlertStatus, string> = {
  info: 'bg-info-50 text-info-800 border-l-4 border-info-500',
  success: 'bg-success-50 text-success-800 border-l-4 border-success-500',
  warning: 'bg-warning-50 text-warning-800 border-l-4 border-warning-500',
  error: 'bg-error-50 text-error-800 border-l-4 border-error-500',
};

const topAccentStyles: Record<AlertStatus, string> = {
  info: 'bg-info-50 text-info-800 border-t-4 border-info-500',
  success: 'bg-success-50 text-success-800 border-t-4 border-success-500',
  warning: 'bg-warning-50 text-warning-800 border-t-4 border-warning-500',
  error: 'bg-error-50 text-error-800 border-t-4 border-error-500',
};

const iconColorStyles: Record<AlertStatus, string> = {
  info: 'text-info-500',
  success: 'text-success-500',
  warning: 'text-warning-500',
  error: 'text-error-500',
};

// =============================================
// ALERT COMPONENT
// =============================================

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      className,
      status = 'info',
      variant = 'subtle',
      title,
      isClosable = false,
      onClose,
      icon,
      hideIcon = false,
      children,
      ...props
    },
    ref
  ) => {
    const getVariantStyles = () => {
      switch (variant) {
        case 'subtle':
          return subtleStyles[status];
        case 'solid':
          return solidStyles[status];
        case 'left-accent':
          return leftAccentStyles[status];
        case 'top-accent':
          return topAccentStyles[status];
        default:
          return subtleStyles[status];
      }
    };

    const iconElement = icon || statusIcons[status];
    const isSolid = variant === 'solid';

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          'relative rounded-lg p-4',
          getVariantStyles(),
          className
        )}
        {...props}
      >
        <div className="flex">
          {!hideIcon && (
            <div className={cn(
              'flex-shrink-0',
              isSolid ? 'text-white' : iconColorStyles[status]
            )}>
              {iconElement}
            </div>
          )}

          <div className={cn('flex-1', !hideIcon && 'ml-3')}>
            {title && (
              <h3 className="text-sm font-medium">
                {title}
              </h3>
            )}
            {children && (
              <div className={cn('text-sm', title && 'mt-1')}>
                {children}
              </div>
            )}
          </div>

          {isClosable && (
            <button
              type="button"
              onClick={onClose}
              className={cn(
                'ml-auto -mx-1.5 -my-1.5 rounded-lg p-1.5 inline-flex items-center justify-center h-8 w-8',
                'hover:bg-black/5 focus:ring-2 focus:ring-offset-2 focus:outline-none',
                isSolid
                  ? 'text-white/80 hover:text-white hover:bg-white/10 focus:ring-white'
                  : `${iconColorStyles[status]} focus:ring-${status}-500`
              )}
            >
              <span className="sr-only">Close</span>
              <CloseIcon />
            </button>
          )}
        </div>
      </div>
    );
  }
);

Alert.displayName = 'Alert';

export { Alert };
