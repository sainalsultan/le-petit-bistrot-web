import LeafIcon from './LeafIcon';

export default function ChatFab({ visible, onClick }) {
  return (
    <div
      className={`chat-fab${visible ? ' visible' : ''}`}
      onClick={onClick}
      role="button"
      aria-label="Open chat assistant"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      <LeafIcon size={24} opacity={0.85} fill='#161610' />
    </div>
  );
}
