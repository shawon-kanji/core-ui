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

  /** Show enter animation */
  animate?: boolean;

  /** Animation type */
  animationType?: 'fade' | 'slide-down' | 'slide-up' | 'slide-left' | 'slide-right' | 'scale';

  /** Auto dismiss after duration (ms) - 0 means no auto dismiss */
  duration?: number;
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
// ANIMATION STYLES
// =============================================

const animationEnterStyles = {
  fade: 'animate-in fade-in duration-300',
  'slide-down': 'animate-in fade-in slide-in-from-top-2 duration-300',
  'slide-up': 'animate-in fade-in slide-in-from-bottom-2 duration-300',
  'slide-left': 'animate-in fade-in slide-in-from-right-2 duration-300',
  'slide-right': 'animate-in fade-in slide-in-from-left-2 duration-300',
  scale: 'animate-in fade-in zoom-in-95 duration-300',
};

const animationExitStyles = {
  fade: 'animate-out fade-out duration-200',
  'slide-down': 'animate-out fade-out slide-out-to-top-2 duration-200',
  'slide-up': 'animate-out fade-out slide-out-to-bottom-2 duration-200',
  'slide-left': 'animate-out fade-out slide-out-to-right-2 duration-200',
  'slide-right': 'animate-out fade-out slide-out-to-left-2 duration-200',
  scale: 'animate-out fade-out zoom-out-95 duration-200',
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
      animate = false,
      animationType = 'fade',
      duration = 0,
      children,
      ...props
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = React.useState(true);
    const [isExiting, setIsExiting] = React.useState(false);

    // Auto dismiss
    React.useEffect(() => {
      if (duration > 0) {
        const timer = setTimeout(() => {
          handleClose();
        }, duration);
        return () => clearTimeout(timer);
      }
    }, [duration]);

    const handleClose = () => {
      if (animate) {
        setIsExiting(true);
        // Wait for exit animation to complete
        setTimeout(() => {
          setIsVisible(false);
          onClose?.();
        }, 200);
      } else {
        setIsVisible(false);
        onClose?.();
      }
    };

    if (!isVisible) return null;

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

    const getAnimationStyles = () => {
      if (!animate) return '';
      if (isExiting) return animationExitStyles[animationType];
      return animationEnterStyles[animationType];
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
          getAnimationStyles(),
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
              onClick={handleClose}
              className={cn(
                'ml-auto -mx-1.5 -my-1.5 rounded-lg p-1.5 inline-flex items-center justify-center h-8 w-8',
                'hover:bg-black/5 focus:ring-2 focus:ring-offset-2 focus:outline-none transition-colors',
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

// =============================================
// ALERT CONTAINER TYPES
// =============================================

export type AlertPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

export interface AlertContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Position on screen */
  position?: AlertPosition;
  /** Max width of alerts */
  maxWidth?: string;
}

// =============================================
// POSITION STYLES
// =============================================

const positionStyles: Record<AlertPosition, string> = {
  'top-left': 'top-4 left-4 items-start',
  'top-center': 'top-4 left-1/2 -translate-x-1/2 items-center',
  'top-right': 'top-4 right-4 items-end',
  'bottom-left': 'bottom-4 left-4 items-start',
  'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2 items-center',
  'bottom-right': 'bottom-4 right-4 items-end',
};

// Get optimal animation type based on position
const getAnimationForPosition = (position: AlertPosition): 'slide-down' | 'slide-up' | 'slide-left' | 'slide-right' => {
  switch (position) {
    case 'top-left':
    case 'top-center':
    case 'top-right':
      return 'slide-down';
    case 'bottom-left':
    case 'bottom-center':
    case 'bottom-right':
      return 'slide-up';
    default:
      return 'slide-down';
  }
};

// =============================================
// ALERT CONTAINER COMPONENT
// =============================================

const AlertContainer = React.forwardRef<HTMLDivElement, AlertContainerProps>(
  (
    {
      className,
      position = 'top-right',
      maxWidth = '400px',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'fixed z-50 flex flex-col gap-3 pointer-events-none',
          positionStyles[position],
          className
        )}
        style={{ maxWidth }}
        {...props}
      >
        {React.Children.map(children, (child) => (
          <div className="pointer-events-auto w-full">
            {child}
          </div>
        ))}
      </div>
    );
  }
);

AlertContainer.displayName = 'AlertContainer';

export { Alert, AlertContainer, getAnimationForPosition };
