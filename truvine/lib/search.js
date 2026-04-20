export function filterContent({ posts, videos, query }) {
    if (!query) return { posts, videos };
  
    const q = query.toLowerCase();
  
    return {
      posts: posts.filter(p =>
        p.content.toLowerCase().includes(q) ||
        p.user.toLowerCase().includes(q)
      ),
      videos: videos.filter(v =>
        v.title.toLowerCase().includes(q) ||
        v.creator.toLowerCase().includes(q)
      )
    };
  }