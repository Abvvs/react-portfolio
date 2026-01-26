import React from 'react'
type ButtonProps={
    children: React.ReactNode;
    className?: string;
    size?: "sm" | "default" | "lg";
}& React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className="", size="default", ...props}: ButtonProps) => {
  const baseClasses ="relative overflow-hidden rounded-full font-medium focus: outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-primary/25 shadow-lg";
  const sizeClasses={
    sm: 'px-4 py-2 text-sm',
    default: 'px-6 py-2 text-base',
    lg: "px-8 py-5 text-lg",
  }
  const classes= `${baseClasses} ${sizeClasses[size]} ${className}`;
    return (
    <button className={classes} {...props}>
        <span className='relative flex items-center justify-center gap-2' >{children}</span>
    </button>
  )
}

export default Button