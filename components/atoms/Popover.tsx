import React, { ReactNode, useEffect, useRef, useState } from 'react';      

interface PopoverProps {
  trigger: ReactNode;
  children: ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
  contentClassName?: string;
}

const Popover: React.FC<PopoverProps> = ({
  trigger,
  children,
  position = 'bottom',
  className = '',
  contentClassName = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      popoverRef.current &&
      !popoverRef.current.contains(event.target as Node) &&
      triggerRef.current &&
      !triggerRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const getPositionStyles = () => {
    if (!triggerRef.current) return {};

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const popoverRect = popoverRef.current?.getBoundingClientRect();
    
    let top = 0;
    let left = 0;

    switch (position) {
      case 'top':
        top = triggerRect.top - (popoverRect?.height || 0) - 10; // 10px offset
        left = triggerRect.left + triggerRect.width / 2 - (popoverRect?.width || 0) / 2;
        break;
      case 'bottom':
        top = triggerRect.bottom + 10; // 10px offset
        left = triggerRect.left + triggerRect.width / 2 - (popoverRect?.width || 0) / 2;
        break;
      case 'left':
        top = triggerRect.top + triggerRect.height / 2 - (popoverRect?.height || 0) / 2;
        left = triggerRect.left - (popoverRect?.width || 0) - 10; // 10px offset
        break;
      case 'right':
        top = triggerRect.top + triggerRect.height / 2 - (popoverRect?.height || 0) / 2;
        left = triggerRect.right + 10; // 10px offset
        break;
      default:
        top = triggerRect.bottom + 10;
        left = triggerRect.left + triggerRect.width / 2 - (popoverRect?.width || 0) / 2;
    }
    
    // Adjust if popover goes off-screen
    if (popoverRect) {
        if (left < 0) left = 10;
        if (left + popoverRect.width > window.innerWidth) left = window.innerWidth - popoverRect.width - 10;
        if (top < 0) top = 10;
        if (top + popoverRect.height > window.innerHeight) top = window.innerHeight - popoverRect.height - 10;
    }


    return {
      position: 'fixed' as const, // Use fixed positioning relative to viewport
      top: `${top}px`,
      left: `${left}px`,
    };
  };


  return (
    <div className={`relative inline-block ${className}`}>
      <div ref={triggerRef} onClick={togglePopover} className="cursor-pointer">
        {trigger}
      </div>
      {isOpen && (
        <div
          ref={popoverRef}
          className={`absolute z-10 bg-white border border-gray-300 rounded-md shadow-lg p-4 ${contentClassName}`}
          style={getPositionStyles()}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Popover;
