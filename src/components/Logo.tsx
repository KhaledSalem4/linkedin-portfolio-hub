interface LogoProps {
  className?: string;
  size?: number;
}

const Logo = ({ className = "", size = 40 }: LogoProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="KS Logo"
    >
      {/* Gradient definitions */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(0, 100%, 32%)" />
          <stop offset="100%" stopColor="hsl(0, 100%, 22%)" />
        </linearGradient>
        <filter id="logoShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="hsl(0, 0%, 0%)" floodOpacity="0.2"/>
        </filter>
      </defs>
      
      {/* Rounded square background with gradient */}
      <rect
        x="0"
        y="0"
        width="40"
        height="40"
        rx="10"
        fill="url(#logoGradient)"
        filter="url(#logoShadow)"
      />
      
      {/* K letter - refined design */}
      <path
        d="M11 9V31H15V22.5L14.5 21.5L22 31H27L18.5 20.5L26 9H21.5L15 18.5V9H11Z"
        fill="#F3F4F6"
      />
      
      {/* S letter - modern geometric style */}
      <path
        d="M26 13C26 11.3 27.3 10 29 10H34V13H29.5C29.2 13 29 13.2 29 13.5V15.5C29 15.8 29.2 16 29.5 16H32C33.7 16 35 17.3 35 19V27C35 28.7 33.7 30 32 30H26V27H31.5C31.8 27 32 26.8 32 26.5V19.5C32 19.2 31.8 19 31.5 19H29C27.3 19 26 17.7 26 16V13Z"
        fill="#F3F4F6"
        transform="translate(-3, 0) scale(0.85)"
      />
      
      {/* Subtle accent line */}
      <rect
        x="11"
        y="32"
        width="18"
        height="1.5"
        rx="0.75"
        fill="#F3F4F6"
        opacity="0.3"
      />
    </svg>
  );
};

export default Logo;
