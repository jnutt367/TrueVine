export default function VideoCard({ video }) {
    return (
      <div className="group relative rounded-xl overflow-hidden bg-black cursor-pointer transform transition hover:scale-105">
        <div className="aspect-video">
          <iframe
            src={video.url}
            className="w-full h-full"
            allowFullScreen
          />
        </div>
  
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2 opacity-0 group-hover:opacity-100 transition">
          <p className="text-white text-xs font-bold">{video.creator}</p>
        </div>
      </div>
    );
  }