import type React from 'react'
import "./Button.css"

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    disabled?: boolean
    variant?: "primary" | "secondary"
}

const Button: React.FC<ButtonProps> = ({
    onClick,
    children,
    disabled = false,
    variant = "primary"
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`button button-${variant} ${disabled ? "disabled" : ""}`}>
                {children}
        </button>
    )
}

export default Button