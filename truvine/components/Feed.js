"use client";

export default function Feed({ posts, currentUser = "Jason", onDelete }) {
  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-20 text-slate-300 font-black uppercase tracking-[0.2em] text-[10px]">
        The vine is currently quiet.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {posts.map((item) => {
        const isOwner = item.user === currentUser;

        // 🟡 PRAYER CARD
        if (item.type === "prayer") {
          return (
            <div
              key={item.id}
              className="bg-amber-50 p-8 rounded-[2.5rem] border-2 border-amber-100 shadow-sm relative"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3 text-amber-700">
                  <span className="material-icons text-lg">front_hand</span>
                  <span className="font-black text-[10px] uppercase tracking-widest">
                    Prayer Request • {item.user}
                  </span>
                </div>

                {isOwner && (
                 <button
                 type="button"
                 onClick={() => onDelete(item.id)}
                 className="material-icons text-sm opacity-30 hover:opacity-100 hover:text-red-500"
               >
                 delete
               </button>
                )}
              </div>

              <p className="text-2xl font-serif italic mb-6">
  {`"${item.content}"`}
</p>

<button
  type="button"
  onClick={() => alert("🙏 Prayer lifted up!")}
  className="bg-amber-500 text-white px-6 py-2 rounded-xl font-black text-[10px]"
>
  Prayed For This
</button>
            </div>
          );
        }

        // 🟢 TESTIMONY CARD
        if (item.type === "testimony") {
          return (
            <div
              key={item.id}
              className="bg-gradient-to-br from-green-600 to-emerald-800 p-1 text-white rounded-[2.5rem] shadow-xl relative"
            >
              <div className="bg-slate-900/20 backdrop-blur-sm p-8 rounded-[2.4rem] h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="material-icons text-green-300">
                      auto_awesome
                    </span>
                    <span className="font-black text-[10px] uppercase tracking-[0.2em] text-green-100">
                      VICTORY TESTIMONY
                    </span>
                  </div>

                  {isOwner && (
                    <button
                      type="button"
                      className="material-icons text-sm opacity-30 hover:opacity-100 hover:text-red-400"
                    >
                      delete
                    </button>
                  )}
                </div>

                <p className="text-2xl font-serif italic mb-6">
  {`"${item.content}"`}
</p>

                <p className="text-[10px] font-black text-green-200 uppercase tracking-widest">
                  — Shared by {item.user}
                </p>
              </div>
            </div>
          );
        }

        // ⚪ REGULAR POST
        return (
          <div
            key={item.id}
            className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-200 relative"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-black text-xs text-slate-400 border">
                  {item.user?.charAt(0)}
                </div>

                <span className="font-black text-slate-800 text-[10px] uppercase tracking-widest">
                  {item.user}
                </span>
              </div>

              {isOwner && (
                <button
                  type="button"
                  className="material-icons text-sm opacity-30 hover:opacity-100 hover:text-red-500"
                >
                  delete
                </button>
              )}
            </div>

            <p className="text-slate-600 font-medium leading-relaxed">
              {item.content}
            </p>
          </div>
        );
      })}
    </div>
  );
}