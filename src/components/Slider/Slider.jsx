import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Dummy data (you can fetch dynamically later)
const playlists = [
    {
        id: 1,
        title: "New Music Friday India",
        description: "Handpicked fresh new international...",
        image: "https://wallpapercave.com/wp/wp8073284.jpg",
    },
    {
        id: 2,
        title: "Release Radar",
        description: "Catch all the latest music from artists you...",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2U5gwsc2vFQcj3wB8M15bneggCyMaKpMbcFGasbFULXJRBE9waGAFJpJ0Nebe6j8b54I&usqp=CAU",
    },
    {
        id: 3,
        title: "Naya Indiestan",
        description: "Naye Indie gaano ka khazana, featuring...",
        image: "https://e1.pxfuel.com/desktop-wallpaper/217/746/desktop-wallpaper-watch-new-hindi-song-music-video-thumbnail.jpg",
    },
    {
        id: 4,
        title: "Latest Love Tunes",
        description: "The melody of love is blooming. Listen to...",
        image: "https://wallpapercave.com/wp/wp8073284.jpg",
    },
    {
        id: 5,
        title: "Bollywood Vibes",
        description: "Feel the rhythm of Bollywood hits...",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2U5gwsc2vFQcj3wB8M15bneggCyMaKpMbcFGasbFULXJRBE9waGAFJpJ0Nebe6j8b54I&usqp=CAU",
    },
    {
        id: 6,
        title: "Top 20 Global",
        description: "Worldwide chartbusters all in one playlist...",
        image: "https://e1.pxfuel.com/desktop-wallpaper/217/746/desktop-wallpaper-watch-new-hindi-song-music-video-thumbnail.jpg",
    },
    {
        id: 7,
        title: "Acoustic Chill",
        description: "Relax with soft acoustic tracks...",
        image: "https://wallpapercave.com/wp/wp8073284.jpg",
    },
    {
        id: 8,
        title: "Punjabi Beats",
        description: "Groove to the latest Punjabi bangers...",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2U5gwsc2vFQcj3wB8M15bneggCyMaKpMbcFGasbFULXJRBE9waGAFJpJ0Nebe6j8b54I&usqp=CAU",
    },
    {
        id: 9,
        title: "Morning Motivation",
        description: "Start your day with positive energy...",
        image: "https://e1.pxfuel.com/desktop-wallpaper/217/746/desktop-wallpaper-watch-new-hindi-song-music-video-thumbnail.jpg",
    },
    {
        id: 10,
        title: "Lo-Fi Chill",
        description: "Perfect vibes to study, relax, and chill...",
        image: "https://wallpapercave.com/wp/wp8073284.jpg",
    },
    {
        id: 11,
        title: "Indie Rising",
        description: "Fresh indie voices from across India...",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2U5gwsc2vFQcj3wB8M15bneggCyMaKpMbcFGasbFULXJRBE9waGAFJpJ0Nebe6j8b54I&usqp=CAU",
    },
    {
        id: 12,
        title: "Romantic Mix",
        description: "Fall in love again with these soulful tracks...",
        image: "https://e1.pxfuel.com/desktop-wallpaper/217/746/desktop-wallpaper-watch-new-hindi-song-music-video-thumbnail.jpg",
    },
    {
        id: 13,
        title: "Hip-Hop Hype",
        description: "The best hip-hop beats to keep you moving...",
        image: "https://wallpapercave.com/wp/wp8073284.jpg",
    },
    {
        id: 14,
        title: "Workout Pump",
        description: "Get energized with these workout anthems...",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2U5gwsc2vFQcj3wB8M15bneggCyMaKpMbcFGasbFULXJRBE9waGAFJpJ0Nebe6j8b54I&usqp=CAU",
    },
    {
        id: 15,
        title: "Classical Essence",
        description: "Rediscover the timeless classical gems...",
        image: "https://e1.pxfuel.com/desktop-wallpaper/217/746/desktop-wallpaper-watch-new-hindi-song-music-video-thumbnail.jpg",
    },
    {
        id: 16,
        title: "Party Anthems",
        description: "Turn the volume up for the ultimate party...",
        image: "https://wallpapercave.com/wp/wp8073284.jpg",
    },
    {
        id: 17,
        title: "Top Hits India",
        description: "India’s biggest chart-topping hits...",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2U5gwsc2vFQcj3wB8M15bneggCyMaKpMbcFGasbFULXJRBE9waGAFJpJ0Nebe6j8b54I&usqp=CAU",
    },
    {
        id: 18,
        title: "Focus Flow",
        description: "Stay productive with deep focus music...",
        image: "https://e1.pxfuel.com/desktop-wallpaper/217/746/desktop-wallpaper-watch-new-hindi-song-music-video-thumbnail.jpg",
    },
    {
        id: 19,
        title: "Retro Rewind",
        description: "Travel back in time with retro classics...",
        image: "https://wallpapercave.com/wp/wp8073284.jpg",
    },
    {
        id: 20,
        title: "Dance Fever",
        description: "Get moving with non-stop dance tracks...",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2U5gwsc2vFQcj3wB8M15bneggCyMaKpMbcFGasbFULXJRBE9waGAFJpJ0Nebe6j8b54I&usqp=CAU",
    },
];


const CustomSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // default (desktop)
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024, // tablets
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640, // mobile
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="w-full max-w-7xl mx-auto px-0">
            <Slider {...settings}>
                {playlists.map((item) => (
                    <div key={item.id} className="p-2 mx-1">
                        <div className="bg-[#181818] rounded-xl p-3 hover:bg-[#282828] transition duration-300 cursor-pointer">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="rounded-lg w-full h-48 object-cover mb-3"
                            />
                            <h3 className="text-white font-semibold truncate">{item.title}</h3>
                            <p className="text-gray-400 text-sm truncate">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CustomSlider;
