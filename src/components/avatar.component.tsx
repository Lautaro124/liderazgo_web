interface AvatarProps {
  imageUrl?: string;
  altText: string;
  size?: string;
}

export const Avatar = ({ imageUrl, altText, size }: AvatarProps) => {
  if (!imageUrl) {
    return (
      <img
        className={size ? `h-${size} w-${size} rounded-full` : "h-8 w-8 rounded-full"}
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt={altText}
      />
    );
  }

  return <img className={size ? `h-${size} w-${size} rounded-full` : "h-8 w-8 rounded-full"} src={imageUrl} alt={altText} />;
};
