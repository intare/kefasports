import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description?: string;
  icon?: string;
  link: string;
  linkText?: string;
  imageUrl?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  icon = "tennis",
  link,
  linkText = "SEE OUR WORK",
  imageUrl
}) => {
  // Map service titles to specific images
  const getServiceImage = () => {
    if (imageUrl) return imageUrl;

    const imageMap: Record<string, string> = {
      "TENNIS COURTS": "/gallery/centralafrica/tennis-court-serve.jpg",
      "PICKLEBALL COURTS": "/gallery/centralafrica/k7.jpg",
      "BASKETBALL COURTS": "/gallery/centralafrica/k1.jpg",
      "BOCCE COURTS": "/gallery/centralafrica/k6.jpg",
      "SPORTS EQUIPMENT & GEAR": "/gallery/centralafrica/k2.jpg",
      "CONSTRUCTION & DESIGN": "/gallery/centralafrica/s2.jpg",
      "KEFASPORTS": "/gallery/centralafrica/k3.jpg",
      "INSTALLATION & MAINTENANCE": "/gallery/centralafrica/k5.jpg",
    };

    return imageMap[title] || "/gallery/court1.jpg";
  };

  // Icon SVGs for each service type
  const getIconSVG = (iconType: string = "tennis") => {
    const icons: Record<string, JSX.Element> = {
      tennis: (
        <svg className="w-10 h-10" viewBox="0 0 50 50" fill="white">
          <circle cx="25" cy="25" r="20" stroke="white" strokeWidth="2" fill="none"/>
          <path d="M5 25 Q 25 5, 45 25" stroke="white" strokeWidth="1.5" fill="none"/>
          <path d="M5 25 Q 25 45, 45 25" stroke="white" strokeWidth="1.5" fill="none"/>
          <circle cx="25" cy="25" r="12" stroke="white" strokeWidth="1.5" fill="none"/>
        </svg>
      ),
      pickleball: (
        <svg className="w-10 h-10" viewBox="0 0 50 50" fill="white">
          <circle cx="25" cy="25" r="18" stroke="white" strokeWidth="2" fill="none"/>
          {[...Array(8)].map((_, i) => (
            <circle key={i} cx={25 + 10 * Math.cos(i * Math.PI / 4)} cy={25 + 10 * Math.sin(i * Math.PI / 4)} r="2" fill="white"/>
          ))}
        </svg>
      ),
      basketball: (
        <svg className="w-10 h-10" viewBox="0 0 50 50" fill="white">
          <circle cx="25" cy="25" r="20" stroke="white" strokeWidth="2" fill="none"/>
          <path d="M25 5 L25 45 M5 25 L45 25" stroke="white" strokeWidth="2"/>
          <path d="M10 10 Q25 25, 40 10 M10 40 Q25 25, 40 40" stroke="white" strokeWidth="1.5" fill="none"/>
        </svg>
      ),
      bocce: (
        <svg className="w-10 h-10" viewBox="0 0 50 50" fill="white">
          <circle cx="25" cy="25" r="20" fill="white"/>
          <circle cx="25" cy="25" r="16" fill="#F36C20"/>
          <circle cx="25" cy="25" r="8" fill="white"/>
        </svg>
      ),
      equipment: (
        <svg className="w-10 h-10" viewBox="0 0 50 50" fill="white">
          <rect x="10" y="15" width="30" height="20" rx="3" stroke="white" strokeWidth="2" fill="none"/>
          <rect x="15" y="10" width="20" height="5" fill="white"/>
          <circle cx="20" cy="25" r="4" fill="white"/>
          <circle cx="30" cy="25" r="4" fill="white"/>
        </svg>
      ),
      construction: (
        <svg className="w-10 h-10" viewBox="0 0 50 50" fill="white">
          <path d="M10 40 L25 10 L40 40 Z" stroke="white" strokeWidth="2" fill="none"/>
          <rect x="20" y="30" width="10" height="10" fill="white"/>
          <path d="M15 25 L35 25" stroke="white" strokeWidth="2"/>
        </svg>
      ),
      kefasports: (
        <svg className="w-10 h-10" viewBox="0 0 50 50" fill="white">
          <text x="25" y="32" fontSize="24" fontWeight="bold" textAnchor="middle" fill="white">K</text>
          <circle cx="25" cy="25" r="22" stroke="white" strokeWidth="2" fill="none"/>
        </svg>
      ),
      installation: (
        <svg className="w-10 h-10" viewBox="0 0 50 50" fill="white">
          <path d="M15 10 L35 10 M25 10 L25 30" stroke="white" strokeWidth="2"/>
          <path d="M15 30 L35 30 M20 35 L30 35 M22 40 L28 40" stroke="white" strokeWidth="2"/>
          <circle cx="25" cy="15" r="3" fill="white"/>
        </svg>
      ),
    };

    return icons[iconType] || icons.tennis;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
      {/* Image Section with Icon Badge */}
      <div className="relative h-64 sm:h-72 overflow-hidden">
        <Image
          src={getServiceImage()}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* Orange Icon Badge */}
        <div
          className="absolute top-4 left-4 w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center shadow-lg"
          style={{ backgroundColor: '#F36C20' }}
        >
          {getIconSVG(icon)}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col items-center justify-center flex-grow bg-white">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 text-center uppercase tracking-wide">
          {title}
        </h3>

        {/* See Our Work Button */}
        <Link
          href={link}
          className="px-6 py-3 text-sm font-semibold text-white uppercase tracking-wide transition-all duration-300 hover:opacity-90"
          style={{ backgroundColor: 'rgb(243, 108, 32)' }}
        >
          {linkText}
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
