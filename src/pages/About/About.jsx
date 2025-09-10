const tracks = [
  {
    id: 1,
    title: "Nai Jaana",
    artist: "Neha Bhasin",
    album: "Nai Jaana",
    time: "2:50",
    img: "https://spotify427.netlify.app/assets/Saiyara-8D8dnX-x.jpg",
  },
  {
    id: 2,
    title: "High Heels",
    artist: "Jaz Dhami, Yo Yo Honey Singh",
    album: "High Heels",
    time: "4:57",
    img: "https://spotify427.netlify.app/assets/Saiyara-8D8dnX-x.jpg",
  },
  {
    id: 3,
    title: "Shiv Sama Rahe",
    artist: "Hansraj Raghuwanshi",
    album: "Shiv Sama Rahe",
    time: "5:33",
    img: "https://spotify427.netlify.app/assets/Saiyara-8D8dnX-x.jpg",
  },
  {
    id: 4,
    title: "Mere Humsafar (Original...)",
    artist: "Yashal Shahid",
    album: "Mere Humsafar (Original...)",
    time: "5:51",
    img: "https://spotify427.netlify.app/assets/Saiyara-8D8dnX-x.jpg",
  },
  {
    id: 5,
    title: "Humsafar Humsafar",
    artist: "Kunaal Vermaa, Aryam",
    album: "Humsafar Humsafar",
    time: "3:52",
    img: "https://spotify427.netlify.app/assets/Saiyara-8D8dnX-x.jpg",
  },
];

const Home = () => {
  return (
    <>
      <div className="w-full h-80 bg-gradient-to-b from-[#2b2b2b] to-black relative flex items-end">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5405840/pexels-photo-5405840.jpeg')] bg-cover bg-center opacity-40"></div>
        <div className="relative z-10 p-8">
          <p className="text-sm text-white/80 font-semibold">Public Playlist</p>
          <h1 className="text-5xl font-extrabold text-white mt-2">Discover Weekly</h1>
          <p className="text-sm text-gray-200 mt-2 max-w-2xl">
            Your shortcut to hidden gems, deep cuts, and future faves, updated every Monday.
            You’ll know it when you hear it.
          </p>

          <div className="flex items-center gap-2 mt-4 text-sm text-gray-300">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
              alt="spotify"
              className="w-6 h-6"
            />
            <span className="font-semibold">Spotify</span>
            <span>• 30 songs, about 2 hr</span>
          </div>
        </div>
      </div>
      <div className="w-full bg-gradient-to-b from-[#070f29] to-black text-white p-6">
        <div className="flex items-center gap-4 mb-6">
          <button className="rounded-full shadow-lg hover:scale-105 transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#1ED760" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-14 h-14 stroke-1 stroke-black">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
            </svg>
          </button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 stroke-1 stroke-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 stroke-1 stroke-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 stroke-1 stroke-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
        </div>

        <div className="grid grid-cols-12 text-gray-400 text-sm border-b border-gray-700 pb-2 mb-2">
          <span className="col-span-1">#</span>
          <span className="col-span-5">Title</span>
          <span className="col-span-4">Album</span>
          <span className="col-span-2 text-right">⏱</span>
        </div>

        {tracks.map((track, i) => (
          <div
            key={track.id}
            className="grid grid-cols-12 items-center text-gray-300 py-2 hover:bg-white/10 rounded-md cursor-pointer"
          >
            <span className="col-span-1">{i + 1}</span>

            <div className="col-span-5 flex items-center gap-3">
              <img src={track.img} alt={track.title} className="w-10 h-10 rounded-md" />
              <div>
                <p className="text-white text-sm">{track.title}</p>
                <p className="text-xs text-gray-400">{track.artist}</p>
              </div>
            </div>

            <span className="col-span-4 text-sm">{track.album}</span>
            <span className="col-span-2 text-right text-sm">{track.time}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
