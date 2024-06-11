import styles from './button.module.css';

export interface ButtonProps {
    children?: React.ReactNode;
    icon?: React.ReactElement;
    onClick?: () => void;
    variant?: 'primary' | 'activity' | 'secondary' | 'tertiary' | 'success' | 'info' | 'warning' | 'danger';
    isActive?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, icon, onClick, variant = 'primary', isActive = false }) => {
    const buttonClass = isActive ? `${styles.button} ${styles.activity}` : `${styles.button} ${styles[variant]}`;
    return (
        <button className={buttonClass} onClick={onClick}>
            {icon}
            {children}
        </button>
    );
};
