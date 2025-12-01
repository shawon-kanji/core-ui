import * as React from 'react';
import { cn } from '../lib/utils';

// =============================================
// AVATAR TYPES
// =============================================

export type AvatarColor =
  | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'
  | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone'
  | 'red' | 'orange' | 'amber' | 'yellow' | 'lime'
  | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky'
  | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia'
  | 'pink' | 'rose';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Image source */
  src?: string;

  /** Alt text for image */
  alt?: string;

  /** Fallback name (generates initials) */
  name?: string;

  /** Size */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

  /** Border radius */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

  /** Background color for fallback */
  color?: AvatarColor;

  /** Show online/offline status */
  showStatus?: boolean;

  /** Status value */
  status?: 'online' | 'offline' | 'busy' | 'away';

  /** Custom fallback icon */
  fallbackIcon?: React.ReactNode;
}

// =============================================
// STYLES
// =============================================

const sizeStyles = {
  xs: 'h-6 w-6 text-xs',
  sm: 'h-8 w-8 text-sm',
  md: 'h-10 w-10 text-base',
  lg: 'h-12 w-12 text-lg',
  xl: 'h-14 w-14 text-xl',
  '2xl': 'h-16 w-16 text-2xl',
};

const radiusStyles = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  full: 'rounded-full',
};

const colorStyles: Record<AvatarColor, string> = {
  primary: 'bg-primary-100 text-primary-700',
  secondary: 'bg-secondary-100 text-secondary-700',
  success: 'bg-success-100 text-success-700',
  warning: 'bg-warning-100 text-warning-700',
  error: 'bg-error-100 text-error-700',
  info: 'bg-info-100 text-info-700',
  slate: 'bg-slate-100 text-slate-700',
  gray: 'bg-gray-100 text-gray-700',
  zinc: 'bg-zinc-100 text-zinc-700',
  neutral: 'bg-neutral-100 text-neutral-700',
  stone: 'bg-stone-100 text-stone-700',
  red: 'bg-red-100 text-red-700',
  orange: 'bg-orange-100 text-orange-700',
  amber: 'bg-amber-100 text-amber-700',
  yellow: 'bg-yellow-100 text-yellow-700',
  lime: 'bg-lime-100 text-lime-700',
  green: 'bg-green-100 text-green-700',
  emerald: 'bg-emerald-100 text-emerald-700',
  teal: 'bg-teal-100 text-teal-700',
  cyan: 'bg-cyan-100 text-cyan-700',
  sky: 'bg-sky-100 text-sky-700',
  blue: 'bg-blue-100 text-blue-700',
  indigo: 'bg-indigo-100 text-indigo-700',
  violet: 'bg-violet-100 text-violet-700',
  purple: 'bg-purple-100 text-purple-700',
  fuchsia: 'bg-fuchsia-100 text-fuchsia-700',
  pink: 'bg-pink-100 text-pink-700',
  rose: 'bg-rose-100 text-rose-700',
};

const statusColorStyles = {
  online: 'bg-green-500',
  offline: 'bg-gray-400',
  busy: 'bg-red-500',
  away: 'bg-amber-500',
};

const statusSizeStyles = {
  xs: 'h-1.5 w-1.5 border',
  sm: 'h-2 w-2 border',
  md: 'h-2.5 w-2.5 border-2',
  lg: 'h-3 w-3 border-2',
  xl: 'h-3.5 w-3.5 border-2',
  '2xl': 'h-4 w-4 border-2',
};

// =============================================
// HELPERS
// =============================================

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) {
    return parts[0].charAt(0).toUpperCase();
  }
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
}

// Default user icon
function DefaultIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  );
}

// =============================================
// AVATAR COMPONENT
// =============================================

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      className,
      src,
      alt,
      name,
      size = 'md',
      radius = 'full',
      color = 'gray',
      showStatus = false,
      status = 'offline',
      fallbackIcon,
      ...props
    },
    ref
  ) => {
    const [imageError, setImageError] = React.useState(false);

    const showImage = src && !imageError;
    const showInitials = !showImage && name;
    const showFallback = !showImage && !showInitials;

    return (
      <div
        ref={ref}
        className={cn(
          'relative inline-flex items-center justify-center overflow-hidden font-medium',
          sizeStyles[size],
          radiusStyles[radius],
          !showImage && colorStyles[color],
          className
        )}
        {...props}
      >
        {showImage && (
          <img
            src={src}
            alt={alt || name || 'Avatar'}
            className="h-full w-full object-cover"
            onError={() => setImageError(true)}
          />
        )}

        {showInitials && (
          <span className="select-none">
            {getInitials(name)}
          </span>
        )}

        {showFallback && (
          fallbackIcon || <DefaultIcon className="h-[60%] w-[60%]" />
        )}

        {showStatus && (
          <span
            className={cn(
              'absolute bottom-0 right-0 block rounded-full border-white',
              statusColorStyles[status],
              statusSizeStyles[size]
            )}
          />
        )}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';

// =============================================
// AVATAR GROUP
// =============================================

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Maximum avatars to show */
  max?: number;

  /** Size for all avatars */
  size?: AvatarProps['size'];

  /** Spacing between avatars (negative for overlap) */
  spacing?: 'tight' | 'normal' | 'loose';

  children: React.ReactNode;
}

const spacingStyles = {
  tight: '-space-x-3',
  normal: '-space-x-2',
  loose: '-space-x-1',
};

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  (
    {
      className,
      max = 5,
      size = 'md',
      spacing = 'normal',
      children,
      ...props
    },
    ref
  ) => {
    const avatars = React.Children.toArray(children);
    const excess = avatars.length - max;
    const visibleAvatars = excess > 0 ? avatars.slice(0, max) : avatars;

    return (
      <div
        ref={ref}
        className={cn('flex items-center', spacingStyles[spacing], className)}
        {...props}
      >
        {visibleAvatars.map((child, index) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement<AvatarProps>, {
              key: index,
              size,
              className: cn('ring-2 ring-white', (child as React.ReactElement<AvatarProps>).props.className),
            });
          }
          return child;
        })}

        {excess > 0 && (
          <Avatar
            size={size}
            color="gray"
            name={`+${excess}`}
            className="ring-2 ring-white"
          />
        )}
      </div>
    );
  }
);

AvatarGroup.displayName = 'AvatarGroup';

export { Avatar, AvatarGroup };
