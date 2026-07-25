import styles from "./button.module.css";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <a
      href={href}
      className={`${styles.button} ${styles[variant]} ${className}`.trim()}
    >
      {children}
    </a>
  );
}
