import React from "react";

type AnimatedBorderButtonProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  download?: boolean;
};
const AnimatedBorderButton = ({
  children,
  className = "",
  href,
  download = false,
}: AnimatedBorderButtonProps) => {
  const classes = `relative bg-transparent border border-border text-foreground hover:border-primary/50 transition-all duration-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group px-8 py-4 text-lg font-medium rounded-full overflow-visible animated-border ${className}`;
  if (href) {
    return (
      <a
        href={href}
        download={download}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </span>
      </a>
    );
  }
  return (
    <button className={classes}>
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};

export default AnimatedBorderButton;
