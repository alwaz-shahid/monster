import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import Link from 'next/link';
import { Card, CardContent } from '../ui/card';

type Comic = {
  imgSrc: string;
  title: string;
  link: string;
};

type ComicCarouselProps = {
  comics: Comic[];
  title: string;
};

export default function ComicCarousel({ comics, title }: ComicCarouselProps) {
  return (
    <div className="bg-finalChapterBlack text-white flex flex-col w-full">
      <h2 className="text-3xl xl:ml-12 pl-4 font-bold mb-6">{title}</h2>
      <div className="flex justify-center items-center xl:items-left xl:justify-start xl:ml-12 xl:pl-4 w-full">
        <Carousel className="w-3/4 h-3/4">
          <CarouselContent className="-ml-1">
            {comics.map((comic, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card className="flex aspect-square border-0 bg-opacity-80 shadow-lg rounded-lg overflow-hidden">
                    <img
                      src={comic.imgSrc}
                      alt={comic.title}
                      className="w-full h-full object-cover"
                    />
                    <CardContent className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white p-4">
                      <a href={comic.link} className="text-lg font-bold">
                        {comic.title}
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
