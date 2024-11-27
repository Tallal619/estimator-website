interface ServiceCardProps {
    title: string;
    description: string;
  }
  
  const ServiceCard = ({ title, description }: ServiceCardProps) => {
    return (
      <div className="service-card bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 text-gray-700">{description}</p>
      </div>
    );
  };
  
  export default ServiceCard;
  