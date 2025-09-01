
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageSrc: string;
  link: string;
  className?: string;
  style?: React.CSSProperties;
}

const ServiceCard = ({
  title,
  description,
  icon,
  imageSrc,
  link,
  className,
  style
}: ServiceCardProps) => {
  return (
    <div 
      className={cn(
        "glassmorphism overflow-hidden group card-hover transition-all duration-500",
        className
      )}
      style={style}
    >
      <div className="relative h-48 overflow-hidden">
        {/* Green overlay for brand consistency */}
        <div className="absolute inset-0 bg-green-500/15 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-psyco-black-DEFAULT via-psyco-black-DEFAULT/80 to-transparent z-10"></div>
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
          style={{
            filter: 'sepia(10%) saturate(120%) hue-rotate(60deg) brightness(0.9) contrast(1.1)'
          }}
        />
        <div className="absolute top-4 left-4 z-20 bg-psyco-black-card/90 backdrop-blur-sm p-2 rounded-lg border border-green-500/20 group-hover:border-cyan-400/30 transition-colors">
          <div className="text-psyco-green-DEFAULT group-hover:text-cyan-400 transition-colors">
            {icon}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4 text-sm">{description}</p>
        <Link 
          to={link}
          className="inline-flex items-center text-psyco-green-light hover:text-cyan-400 transition-colors duration-300 text-sm font-medium"
        >
          Learn more
          <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
