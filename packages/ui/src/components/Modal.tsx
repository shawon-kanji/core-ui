import * as React from 'react';
import { cn } from '../lib/utils';

export type ModalSize = 'sm' | 'md' | 'lg';

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  size?: ModalSize;
  showCloseButton?: boolean;
  className?: string;
}

const sizeStyles: Record<ModalSize, string> = {
  sm: 'max-w-md',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
};

export function Modal({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  size = 'md',
  showCloseButton = true,
  className,
}: ModalProps) {
  const overlayRef = React.useRef<HTMLDivElement>(null);
  const dialogRef = React.useRef<HTMLDivElement>(null);
  const titleId = React.useId();
  const descriptionId = React.useId();

  React.useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  React.useEffect(() => {
    if (!open || !dialogRef.current) return;

    // Store the previously focused element
    const previouslyFocusedElement = document.activeElement as HTMLElement | null;

    // Get all focusable elements within the modal
    const getFocusableElements = () => {
      if (!dialogRef.current) return [];
      const focusableSelectors = [
        'a[href]',
        'area[href]',
        'button:not([disabled])',
        'textarea:not([disabled])',
        'input:not([disabled])',
        'select:not([disabled])',
        'iframe',
        'object',
        'embed',
        'audio[controls]',
        'video[controls]',
        '[tabindex]:not([tabindex="-1"])',
      ].join(', ');
      return Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(focusableSelectors)
      ).filter((el) => {
        // Filter out elements that are not visible or have negative tabindex
        const tabindex = el.getAttribute('tabindex');
        if (tabindex && parseInt(tabindex, 10) < 0) return false;
        
        const style = getComputedStyle(el);
        return (
          el.offsetWidth > 0 &&
          el.offsetHeight > 0 &&
          style.visibility !== 'hidden' &&
          style.display !== 'none'
        );
      }).sort((a, b) => {
        // Sort by tabindex (elements with explicit tabindex come first)
        const aIndex = parseInt(a.getAttribute('tabindex') || '0', 10);
        const bIndex = parseInt(b.getAttribute('tabindex') || '0', 10);
        if (aIndex > 0 && bIndex > 0) return aIndex - bIndex;
        if (aIndex > 0) return -1;
        if (bIndex > 0) return 1;
        return 0;
      });
    };

    // Focus the first focusable element or the dialog itself
    const focusableElements = getFocusableElements();
    if (focusableElements.length > 0) {
      focusableElements[0].focus();
    } else {
      dialogRef.current.focus();
    }

    // Handle Tab key to trap focus within the modal
    const handleTabKey = (event: KeyboardEvent) => {
      if (event.key !== 'Tab' || !dialogRef.current?.contains(event.target as Node)) return;

      const focusableElements = getFocusableElements();
      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey) {
        // Shift + Tab: if focus is on first element, move to last
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab: if focus is on last element, move to first
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener('keydown', handleTabKey);

    return () => {
      document.removeEventListener('keydown', handleTabKey);
      // Restore focus to the previously focused element
      if (previouslyFocusedElement && typeof previouslyFocusedElement.focus === 'function') {
        previouslyFocusedElement.focus();
      }
    };
  }, [open]);

  const handleOverlayClick = (event: React.MouseEvent) => {
    if (event.target === overlayRef.current) {
      onClose();
    }
  };

  if (!open) return null;

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
      role="presentation"
    >
      <div
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        aria-describedby={description ? descriptionId : undefined}
        className={cn(
          'w-full rounded-xl bg-white shadow-2xl outline-none',
          sizeStyles[size],
          className
        )}
      >
        {(title || showCloseButton) && (
          <header className="flex items-start justify-between gap-4 px-6 py-4 border-b border-gray-200">
            <div>
              {title && (
                <h2 id={titleId} className="text-lg font-semibold text-gray-900">{title}</h2>
              )}
              {description && (
                <p id={descriptionId} className="text-sm text-gray-600 mt-1">{description}</p>
              )}
            </div>
            {showCloseButton && (
              <button
                type="button"
                onClick={onClose}
                className="rounded-md p-1 text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                aria-label="Close modal"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </header>
        )}

        <div className="px-6 py-4 text-gray-800">{children}</div>

        {footer && (
          <footer className="px-6 py-4 border-t border-gray-200 bg-gray-50 rounded-b-xl">
            {footer}
          </footer>
        )}
      </div>
    </div>
  );
}
