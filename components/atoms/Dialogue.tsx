import React, { ReactNode, useEffect} from 'react';

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  footerContent?: ReactNode;
  className?: string;
  titleClassName?: string;
  bodyClassName?: string;
  footerClassName?: string;
  overlayClassName?: string;
  contentClassName?: string;
  closeButtonClassName?: string;
  showCloseButton?: boolean;
}

const Dialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footerContent,
  className = '',
  titleClassName = '',
  bodyClassName = '',
  footerClassName = '',
  overlayClassName = '',
  contentClassName = '',
  closeButtonClassName = '',
  showCloseButton = true,
}) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const defaultOverlayStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  };

  const defaultContentStyle: React.CSSProperties = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    minWidth: '300px',
    maxWidth: '90vw',
    maxHeight: '90vh',
    overflowY: 'auto',
    position: 'relative',
  };

  const defaultTitleStyle: React.CSSProperties = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '15px',
  };

  const defaultBodyStyle: React.CSSProperties = {
    marginBottom: '20px',
  };
  
  const defaultFooterStyle: React.CSSProperties = {
    borderTop: '1px solid #eee',
    paddingTop: '15px',
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '10px',
  };

  const defaultCloseButtonStyle: React.CSSProperties = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'transparent',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    padding: '5px',
    lineHeight: '1',
  };

  return (
    <div
      style={defaultOverlayStyle}
      className={`dialog-overlay ${overlayClassName}`}
      onClick={onClose}
    >
      <div
        style={defaultContentStyle}
        className={`dialog-content ${className} ${contentClassName}`}
        onClick={(e) => e.stopPropagation()} // Prevent click through to overlay
      >
        {showCloseButton && (
            <button
            style={defaultCloseButtonStyle}
            onClick={onClose}
            className={`dialog-close-button ${closeButtonClassName}`}
            aria-label="Close dialog"
            >
            &times;
            </button>
        )}
        {title && (
          <div style={defaultTitleStyle} className={`dialog-title ${titleClassName}`}>
            {title}
          </div>
        )}
        <div style={defaultBodyStyle} className={`dialog-body ${bodyClassName}`}>
          {children}
        </div>
        {footerContent && (
          <div style={defaultFooterStyle} className={`dialog-footer ${footerClassName}`}>
            {footerContent}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dialog;