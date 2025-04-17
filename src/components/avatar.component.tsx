import { User } from "lucide-react";

interface AvatarProps {
  imageUrl?: string;
  altText: string;
  size?: string;
  iconScale?: number;
  padding?: number;
}

export const Avatar = ({
  imageUrl,
  altText,
  size = "24",
  iconScale = 0.6,
  padding = 5,
}: AvatarProps) => {
  const iconSize = Math.max(12, Number(size) * iconScale);
  const containerStyle = {
    width: `${size}px`,
    height: `${size}px`,
  };

  if (!imageUrl) {
    return (
      <div
        className={` rounded-full bg-gray-200 flex items-center justify-center p-${padding}`}
      >
        <User
          size={iconSize}
          className="text-gray-500"
          strokeWidth={1.2} 
        />
      </div>
    );
  }

  return (
    <img
      style={containerStyle}
      className="rounded-full object-cover"
      src={imageUrl}
      alt={altText || "Avatar de usuario"}
    />
  );
};
