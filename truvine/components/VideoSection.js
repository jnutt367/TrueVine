import VideoCard from "./VideoCard";

export default function VideoSection({ title, videos }) {
  if (videos.length === 0) return null;

  return (
    <section className="mb-12">
      <h2 className="text-sm font-black text-slate-400 uppercase tracking-[0.3em] mb-4">
        {title}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {videos.map(video => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </section>
  );
}