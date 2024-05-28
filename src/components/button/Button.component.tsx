import styles from './button.module.css';

export interface ButtonProps {
    children?: React.ReactNode;
    icon?: React.ReactElement;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'tertiary' | 'success' | 'info' | 'warning' | 'danger';
}

export const Button: React.FC<ButtonProps> = ({ children, icon, onClick, variant = 'primary' }) => (
    <button className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
        {icon}
        {children}
    </button>
);
