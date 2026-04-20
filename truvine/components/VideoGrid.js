export default function VideoGrid({ videos }) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {videos.map(video => (
          <div key={video.id} className="bg-black rounded-xl overflow-hidden">
            <div className="aspect-video">
              <iframe
                src={video.url}
                className="w-full h-full"
                allowFullScreen
              />
            </div>
            <div className="p-2 text-xs font-bold text-white-600">
              {video.creator}
            </div>
          </div>




        ))}
      </div>
    );
  }