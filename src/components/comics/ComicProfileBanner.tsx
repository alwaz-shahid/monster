type ComicProfileBannerProps = {
    imgSrc: string;
    title: string;
    views: number;
};

export default function ComicProfileBanner({imgSrc, title, views}: ComicProfileBannerProps) {
    return (
      <div className="relative w-full h-[512px]">
        <img src={imgSrc} alt={title} className="object-cover w-full h-full" />
        <div className="absolute bottom-8 left-16 text-white">
          <h1 className="text-3xl my-2 font-bold">{title}</h1>
          <p className="text-lg">{views} views</p>
        </div>
      </div>
    )
  };