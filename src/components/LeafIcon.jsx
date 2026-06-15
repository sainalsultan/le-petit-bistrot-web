export default function LeafIcon({ size = 24, opacity = 0.85, fill = '#8aaa6b' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M24 4 C10 8, 4 22, 8 36 C14 28, 20 18, 38 12 C32 24, 26 32, 20 44 C28 40, 40 30, 44 16 C46 8, 36 2, 24 4Z"
        fill={fill}
        opacity={opacity}
      />
    </svg>
  );
}
