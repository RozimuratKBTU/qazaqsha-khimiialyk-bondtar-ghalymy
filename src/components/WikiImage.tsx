
interface WikiImageProps {
  src: string;
  alt: string;
  caption: string;
  width?: string;
  float?: "left" | "right" | "none";
}

const WikiImage = ({ 
  src, 
  alt, 
  caption, 
  width = "300px", 
  float = "right" 
}: WikiImageProps) => {
  const floatClass = {
    left: "float-left mr-6 mb-2",
    right: "float-right ml-6 mb-2",
    none: "mx-auto mb-2"
  };

  return (
    <figure className={`${floatClass[float]} border border-gray-300 bg-white p-2 rounded-sm`} style={{maxWidth: width}}>
      <img 
        src={src} 
        alt={alt}
        className="w-full h-auto" 
        loading="lazy"
        onError={(e) => {
          e.currentTarget.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/220px-Placeholder_view_vector.svg.png";
          e.currentTarget.onerror = null;
        }}
      />
      <figcaption className="wiki-img-caption mt-2 text-center text-sm text-gray-600">{caption}</figcaption>
    </figure>
  );
};

export default WikiImage;
