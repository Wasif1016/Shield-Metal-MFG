const MetallicText = ({ text, className }: { text: string, className?: string }) => {
  return (
    <div className="flex flex-wrap justify-center gap-0 text-center">
      {text.split(" ").map((word, index) => (
        <span
          key={index}
          className={`text-transparent text-shadow-2xs text-shadow-[#ffffff] italic bg-clip-text ${className}`}
          style={{
            backgroundImage: "url('/text-bg.avif')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
};

export default MetallicText;
