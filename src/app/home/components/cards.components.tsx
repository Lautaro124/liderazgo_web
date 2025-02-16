import React from "react";
import Image from "next/image";

interface CardProps {
  icon: string;
  title: string;
  subtitle: string;
}

const Card: React.FC<CardProps> = ({ icon, title, subtitle }) => {
  return (
    <div className="w-full flex gap-4 items-center border border-gray-300 p-4 rounded-md">
      <Image src={icon} width={30} height={30} alt="curso1" />
      <div className="flex flex-col gap-2 items-center">
        <h3>{title}</h3>
        <span>{subtitle}</span>
      </div>
    </div>
  );
};

export default Card;
