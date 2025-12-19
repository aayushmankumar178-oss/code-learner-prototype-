import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface GradientButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'success' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const variants = {
  primary: 'from-[#3b82f6] to-[#1e3a8a]',
  secondary: 'from-[#8b5cf6] to-[#ec4899]',
  success: 'from-[#10b981] to-[#059669]',
  danger: 'from-[#ef4444] to-[#dc2626]',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3',
  lg: 'px-8 py-4',
};

export default function GradientButton({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button'
}: GradientButtonProps) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`
        relative overflow-hidden rounded-lg
        bg-gradient-to-r ${variants[variant]}
        text-white
        ${sizes[size]}
        transition-all
        hover:shadow-lg hover:shadow-${variant}/50
        ${className}
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 bg-white"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.1 }}
      />
    </motion.button>
  );
}
