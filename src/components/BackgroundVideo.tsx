export default function BackgroundVideo() {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-[#070217]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute min-w-full min-h-full object-cover"
        style={{ objectPosition: 'center' }} // Center the video
      >
        <source src="/videos/optimized-video.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/60" /> {/* Overlay for better text readability */}
    </div>
  );
}
