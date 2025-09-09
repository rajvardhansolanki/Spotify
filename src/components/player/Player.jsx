import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Demo playlist
const playlist = [
  {
    "id": "550e2840-e29b-41d4-a716-446655440000",
    "name": "Saiyaara",
    "artist": "Gulzar,Shreya Ghosal",
    "album": "Saiyaara",
    "url": "https://spotify427.netlify.app/assets/SpotiDownloader.com%20-%20Saiyaara%20(From%20_Saiyaara_)%20-%20Tanishk%20Bagchi-CSwFI6ZU.mp3",
    "thumbnail": "https://spotify427.netlify.app/assets/Saiyara-8D8dnX-x.jpg",
    "liked": false,
    "unliked": false
  },
  {
    "id": "1450e840-e29b-41d4-a716-446655440001",
    "name": "Thodi Si Daaru",
    "artist": "Kishore Kumar",
    "album": "Thodi Si Daaru",
    "url": "https://spotify427.netlify.app/assets/SpotiDownloader.com%20-%20Thodi%20Si%20Daaru%20-%20AP%20Dhillon-BFxYSgNi.mp3",
    "thumbnail": "https://spotify427.netlify.app/assets/Thodi%20Si%20Daaru-BrUM-9uc.jpg",
    "liked": false,
    "unliked": false
  },
  {
    "id": "550e8400-e29b-41d4-a716-446655440002",
    "name": "Sahiba",
    "artist": "sahiba,Nice Love Song",
    "album": "Sahiba",
    "url": "https://spotify427.netlify.app/assets/SpotiDownloader.com%20-%20Sahiba%20-%20Jasleen%20Royal-BQiA-c7b.mp3",
    "thumbnail": "https://spotify427.netlify.app/assets/Sahiba-DBR_QyeO.jpg",
    "liked": false,
    "unliked": false
  },
  {
    "id": "150e8400-e29b-41d4-a716-446655440003",
    "name": "PowerHouse",
    "artist": "Bgm songs,Anirudh Ravichander",
    "album": "Sahiba",
    "url": "https://spotify427.netlify.app/assets/SpotiDownloader.com%20-%20Powerhouse%20-%20Anirudh%20Ravichander-BJkYm20D.mp3",
    "thumbnail": "https://spotify427.netlify.app/assets/PowerHouse-Da9hgfJS.jpg",
    "liked": false,
    "unliked": false
  },
  {
    "id": "250e8400-e29b-41d4-a716-446655440004",
    "name": "Aam Jahe Munde",
    "artist": "good sonh",
    "album": "Aam Jahe Munde",
    "url": "https://spotify427.netlify.app/assets/SpotiDownloader.com%20-%20Aam%20Jahe%20Munde%20-%20Parmish%20Verma-B74UyeXr.mp3",
    "thumbnail": "https://spotify427.netlify.app/assets/Aam%20jahe%20munde-DuBPh7Uo.jpg",
    "liked": false,
    "unliked": false
  },
  {
    "id": "350e8400-e29b-41d4-a716-446655440005",
    "name": "Aavan Jaavan",
    "artist": "Arjit Singh, Shreya Ghosal",
    "album": "Aavan Jaavan",
    "url": "https://spotify427.netlify.app/assets/SpotiDownloader.com%20-%20Aavan%20Jaavan%20(From%20_WAR%202_)%20-%20Pritam-CeV-p9zj.mp3",
    "thumbnail": "https://spotify427.netlify.app/assets/Aavan%20Jaavan-5o5Zpn3j.jpg",
    "liked": false,
    "unliked": false
  },
  {
    "id": "450e8400-e29b-41d4-a716-446655440006",
    "name": "Dhun Saiyaara",
    "artist": "Arjit Singh, Shreya Ghosal",
    "album": "Dhun Saiyaara",
    "url": "https://spotify427.netlify.app/assets/SpotiDownloader.com%20-%20Dhun%20-%20Mithoon-C44Z5vKn.mp3",
    "thumbnail": "https://spotify427.netlify.app/assets/Dhun-BwKMAtf4.jpg",
    "liked": false,
    "unliked": false
  },
  {
    "id": "550e8400-e29b-41d4-a716-446655440007",
    "name": "Gabhru",
    "artist": "Milka Singh, sahiba khan",
    "album": "Gabhru",
    "url": "https://spotify427.netlify.app/assets/SpotiDownloader.com%20-%20Gabhru!%20-%20Karan%20Aujla-BO-X2Yq-.mp3",
    "thumbnail": "https://spotify427.netlify.app/assets/Ghabru-By1UlE6g.jpg",
    "liked": false,
    "unliked": false
  },
  {
    "id": "650e8400-e29b-41d4-a716-446655440008",
    "name": "Heeriye",
    "artist": "Varun Dhawan, Shreya Ghosal",
    "album": "Heeriye",
    "url": "https://spotify427.netlify.app/assets/SpotiDownloader.com%20-%20Heeriye%20(feat.%20Arijit%20Singh)%20-%20Jasleen%20Royal-DD5hANuT.mp3",
    "thumbnail": "https://spotify427.netlify.app/assets/Hrriya-DeDrXffU.jpg",
    "liked": false,
    "unliked": false
  },
  {
    "id": "750e8400-e29b-41d4-a716-446655440009",
    "name": "Apna Bana Le",
    "artist": "Arjun Singh, Shreya Ghosal",
    "album": "Apna Bana Le",
    "url": "https://spotify427.netlify.app/assets/SpotiDownloader.com%20-%20Apna%20Bana%20Le%20-%20Sachin-Jigar-DbW0YkD2.mp3",
    "thumbnail": "https://spotify427.netlify.app/assets/ApnaBanaLe-tjzxKhl3.jpg",
    "liked": false,
    "unliked": false
  },
  {
    "id": "850e8400-e29b-41d4-a716-446655440010",
    "name": "Preet Re",
    "artist": "Ankit Tiwari, Shreya Ghosal",
    "album": "Preet Re",
    "url": "https://spotify427.netlify.app/assets/SpotiDownloader.com%20-%20Preet%20Re%20-%20From%20_Dhadak%202_%20-%20Darshan%20Raval-CQza6dVl.mp3",
    "thumbnail": "https://spotify427.netlify.app/assets/Preet%20re-Efk2rBCM.jpg",
    "liked": false,
    "unliked": false
  },
  {
    "id": "950e8400-e29b-41d4-a716-446655440011",
    "name": "Raanjhanaa",
    "artist": "A.R. Rahman",
    "album": "Raanjhanaa",
    "url": "https://spotify427.netlify.app/assets/SpotiDownloader.com%20-%20Raanjhan%20(From%20_Do%20Patti_)%20-%20Sachet-Parampara-btzCkqY7.mp3",
    "thumbnail": "https://spotify427.netlify.app/assets/Raanjhanaa-qKmqO6lO.jpg",
    "liked": false,
    "unliked": false
  },
  {
    "id": "1050e8400-e29b-41d4-a716-446655440012",
    "name": "Superstar",
    "artist": "Neha Kakkar",
    "album": "Superstar",
    "url": "https://spotify427.netlify.app/assets/SpotiDownloader.com%20-%20STFU%20-%20AP%20Dhillon-Ao_wonl5.mp3",
    "thumbnail": "https://spotify427.netlify.app/assets/Spuerstar-CgvR_92x.jpg",
    "liked": false,
    "unliked": false
  },
  {
    "id": "1150e8400-e29b-41d4-a716-446655440013",
    "name": "Shidu 295",
    "artist": "Shidu Musewala",
    "album": "Shidu 295",
    "url": "https://spotify427.netlify.app/assets/SpotiDownloader.com%20-%20295%20-%20Sidhu%20Moose%20Wala-BScqXvMg.mp3",
    "thumbnail": "https://spotify427.netlify.app/assets/Shidu295-DPoIlMVL.jpg",
    "liked": false,
    "unliked": false
  },
  {
    "id": "1250e8400-e29b-41d4-a716-446655440014",
    "name": "Shidu 0008",
    "artist": "Shidu Musewala",
    "album": "Shidu 0008",
    "url": "https://spotify427.netlify.app/assets/SpotiDownloader.com%20-%20295%20-%20Sidhu%20Moose%20Wala-BScqXvMg.mp3",
    "thumbnail": "https://spotify427.netlify.app/assets/Shidu0008-CEK3x1e7.jpg",
    "liked": false,
    "unliked": false
  },
  {
    "id": "1350e8400-e29b-41d4-a716-446655440015",
    "name": "Pardesiya",
    "artist": "Kishore Kumar",
    "album": "Pardesiya",
    "url": "https://spotify427.netlify.app/assets/SpotiDownloader.com%20-%20Pardesiya%20-%20From%20_Param%20Sundari_%20-%20Sachin-Jigar-BBU_YvbC.mp3",
    "thumbnail": "https://spotify427.netlify.app/assets/Pardesiya-CHV0p8rj.jpg",
    "liked": false,
    "unliked": false
  }
]

const Player = () => {
  const dispatch = useDispatch();
  const audioRef = useRef(null);

  // State
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [showVolume, setShowVolume] = useState(false);
  const { backgroundColor, fontColor } = useSelector(
    (state) => state.theme.colors
  );


  const currentSong = playlist[currentIndex];

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  // Choose icon based on volume
  const getVolumeIcon = () => {
    if (volume === 0) return "🔇";
    if (volume < 0.5) return "🔉";
    return "🔊";
  };

  // Play / Pause toggle
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Update current time
  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  // Handle seek
  const handleSeek = (e) => {
    const seekTime = e.target.value;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  // Next song
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % playlist.length;
    setCurrentIndex(nextIndex);
    setIsPlaying(true);
  };

  // Previous song
  const handlePrev = () => {
    const prevIndex =
      (currentIndex - 1 + playlist.length) % playlist.length;
    setCurrentIndex(prevIndex);
    setIsPlaying(true);
  };

  // Auto play when song changes
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    }
  }, [currentIndex]);

  // Get song duration on load
  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  // Format time mm:ss
  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.volume = volume;

    if (isPlaying) {
      audioRef.current.play().catch(() => setIsPlaying(false));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentSong, volume]);

  return (
    <div className="w-full h-full flex">
      <div className="md:w-2/6 w-full h-full p-2 flex gap-2 justify-between">
        <div className="flex gap-3">
          <div className="md:w-[100px] md:h-[60px] w-[65px] h-[60px] overflow-hidden rounded-sm flex justify-center items-center">
            <img
              className="w-full h-full object-cover block"
              src={currentSong.thumbnail}
              alt="thumbnail"
            />
          </div>
          <div className="md:w-full px-1 text-white">
            <p className="text-[0.8rem] font-bold truncate line-clamp-1">
              {currentSong.name.split(" ").slice(0, 2).join(" ") +
                (currentSong.name.split(" ").length > 2 ? "..." : "")}
            </p>
            <p className="text-[0.8rem] line-clamp-1">
              {currentSong.artist.split(" ").slice(0, 2).join(" ") +
                (currentSong.artist.split(" ").length > 2 ? "..." : "")}
            </p>
          </div>

        </div>
        <div className="block md:hidden h-full">
          <div className="w-[200px] h-full flex justify-center items-center gap-4">
            <div onClick={handlePrev} className="cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 stroke-amber-100">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </div>
            <div
              onClick={togglePlay}
              className="md:w-18 w-12 h-12 mt-1 flex items-center justify-center rounded-full border border-white cursor-pointer"
            >
              {isPlaying ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path d="M6.75 4.5h2.25v15H6.75V4.5zm8.25 0h2.25v15H15V4.5z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path d="M5 3v18l15-9L5 3z" />
                </svg>
              )}
            </div>
            <div className="cursor-pointer relative inline-block">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 stroke-amber-100">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
              {getVolumeIcon()}
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="absolute bottom-[120%] left-1/2 -translate-x-1/2 -rotate-90 w-28 hidden group-hover:block"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full hidden md:block p-3">
        <div className="w-full h-[50%] flex gap-4 items-center justify-between">
          <div></div>
          <div className="flex items-center gap-4">
            <div onClick={handlePrev} className="cursor-pointer hidden md:block">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 stroke-amber-50">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </div>
            <div onClick={togglePlay} className="cursor-pointer">
              {!isPlaying ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10 stroke-amber-50">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10 stroke-amber-50">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              )}
            </div>

            <div onClick={handleNext} className="cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 stroke-amber-50">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </div>
          <div className="flex items-center gap-4 mr-4">
            <div className="cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 stroke-amber-50">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
            </div>
            <div className="cursor-pointer">
              <div className="relative">
                <div
                  onClick={() => setShowVolume(!showVolume)}
                >
                  {volume === 0 ?
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 stroke-2 stroke-white">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 stroke-2 stroke-white">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                    </svg>
                  }
                </div>

                {showVolume && (
                  <div className="absolute bottom-20 left-1/2 -translate-x-1/2 p-2 rounded-lg shadow-lg rotate-[270deg]" style={{ backgroundColor: backgroundColor, border: `1px solid ${fontColor}` }}>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={volume}
                      onChange={(e) => setVolume(parseFloat(e.target.value))}
                      className="w-24 accent-green-900"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[50%] flex items-end">
          <div className="flex items-center w-full gap-2">
            <span className="text-xs text-gray-300 w-10 text-right">
              {formatTime(currentTime)}
            </span>

            <input
              type="range"
              min="0"
              max={duration}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-amber-400
             [&::-webkit-slider-thumb]:appearance-none
             [&::-webkit-slider-thumb]:w-3
             [&::-webkit-slider-thumb]:h-3
             [&::-webkit-slider-thumb]:rounded-full
             [&::-webkit-slider-thumb]:bg-green-900
             [&::-webkit-slider-thumb]:cursor-pointer
             [&::-moz-range-thumb]:w-3
             [&::-moz-range-thumb]:h-3
             [&::-moz-range-thumb]:rounded-full
             [&::-moz-range-thumb]:bg-green-900
             [&::-moz-range-thumb]:border-0
             [&::-moz-range-thumb]:cursor-pointer"
            />

            <span className="text-xs text-gray-300 w-10 text-left">
              {formatTime(duration)}
            </span>
          </div>
        </div>
      </div>

      <audio
        ref={audioRef}
        src={currentSong.url}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleNext}
      />
    </div>
  );
};

export default Player;
