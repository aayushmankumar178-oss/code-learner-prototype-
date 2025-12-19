import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export default function GlassCard({ children, className = '', hover = true, glow = false }: GlassCardProps) {
  const Component = hover ? motion.div : 'div';

  return (
    <Component
      className={`
        relative overflow-hidden rounded-2xl
        bg-white/5 backdrop-blur-xl
        border border-white/10
        ${glow ? 'shadow-[0_0_30px_rgba(59,130,246,0.2)]' : ''}
        ${className}
      `}
      {...(hover && {
        whileHover: { 
          scale: 1.02,
          y: -4,
          boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
        },
        transition: { type: 'spring', stiffness: 300, damping: 20 }
      })}
    >
      {glow && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/10 via-transparent to-[#10b981]/10 pointer-events-none" />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </Component>
  );
}
