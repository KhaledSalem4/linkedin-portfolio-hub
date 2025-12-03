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
      {/* Rounded square background */}
      <rect
        x="0"
        y="0"
        width="40"
        height="40"
        rx="8"
        fill="hsl(0, 100%, 27%)"
      />
      {/* K letter */}
      <path
        d="M10 10V30H14V22L22 30H27L18 21L26 10H21L14 19V10H10Z"
        fill="#F3F4F6"
      />
      {/* S letter */}
      <path
        d="M24 14C24 11.8 25.8 10 28 10H34V14H28V16H32C34.2 16 36 17.8 36 20V26C36 28.2 34.2 30 32 30H24V26H32V24H28C25.8 24 24 22.2 24 20V14Z"
        fill="#F3F4F6"
        transform="translate(-4, 0) scale(0.7)"
      />
    </svg>
  );
};

export default Logo;
