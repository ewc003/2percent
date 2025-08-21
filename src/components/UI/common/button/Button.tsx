import { useState, type MouseEvent } from "react";
import './button.css';

export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;

  /** What background color to use */
  backgroundColor?: string;

  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';

  /** Button contents */
  label: string;

  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  primary = true,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const [ripples, setRipples] = useState<{ x: number; y: number; size: number; id: number }[]>([]);

  const createRipple = (event: MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const rippleSize = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - rippleSize / 2;
    const y = event.clientY - rect.top - rippleSize / 2;

    const newRipple = { x, y, size: rippleSize, id: Date.now() };
    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);
  };

  const mode = primary ? "you-button--primary" : "you-button--secondary";

  return (
    <button
      type="button"
      className={["you-button", `you-button--${size}`, mode].join(" ")}
      style={{ backgroundColor }}
      onClick={(e) => {
        createRipple(e);
        props.onClick?.();
        console.log('clicked...')
      }}
      {...props}
    >
      {label}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="ripple"
          style={{
            width: `${r.size}px`,
            height: `${r.size}px`,
            top: `${r.y}px`,
            left: `${r.x}px`,
          }}
        />
      ))}
    </button>
  );
};
