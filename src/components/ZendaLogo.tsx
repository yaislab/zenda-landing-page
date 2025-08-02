const ZendaLogo = ({ className = "w-12 h-12" }: { className?: string }) => {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="zendaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0052CC" />
          <stop offset="100%" stopColor="#00FF7F" />
        </linearGradient>
      </defs>
      
      {/* Background Circle */}
      <circle cx="50" cy="50" r="45" fill="url(#zendaGradient)" />
      
      {/* Stylized Z */}
      <path 
        d="M25 30 L70 30 L35 55 L70 55 L25 70 L60 70 L25 45 Z" 
        fill="white" 
        stroke="white" 
        strokeWidth="2" 
        strokeLinejoin="round"
      />
      
      {/* Chat Bubble */}
      <circle cx="75" cy="25" r="12" fill="#00FF7F" />
      <path 
        d="M70 20 L80 20 L80 30 L75 25 Z" 
        fill="#00FF7F"
      />
      
      {/* Arrow inside bubble */}
      <path 
        d="M72 22 L78 25 L72 28 M78 25 L70 25" 
        stroke="white" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        fill="none"
      />
    </svg>
  );
};

export default ZendaLogo;