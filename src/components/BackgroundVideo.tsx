export default function BackgroundVideo() {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute min-w-full min-h-full object-cover"
        poster="/hero-bg.jpg"
      >
        <source src="/videos/optimized-video.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/60" /> {/* Overlay for better text readability */}
    </div>
  );
}