type HomeBannerComicProps = {
  description: string;
  imgSrc: string;
  title: string;
};

// TODO: Test on larger screens.
export default function HomeBannerComic({
  description,
  imgSrc,
  title,
}: HomeBannerComicProps) {
  return (
    <div className="relative w-full h-[538px]">
      <img
        src={imgSrc}
        alt="Revenant"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-black bg-opacity-10 flex items-end p-4">
        <div className="text-white">
          <h1 className="text-3xl xl:ml-12 font-bold">{title}</h1>
          <p className="mt-2 line-clamp-3 xl:ml-12 text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
}
