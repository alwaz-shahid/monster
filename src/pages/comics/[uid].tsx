import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { fetchComicDetails } from '../../utils/api';
import { ComicDetails, Chapter } from '../../utils/types';

import ComicProfileBanner from '../../components/comics/ComicProfileBanner';
import ComicDetailsTab from '../../components/comics/ComicDetailsTab';

// TODO: do I have to use usePrivy hook here to gate access as well?
export default function ComicProfilePage() {
  const router = useRouter();
  const { uid } = router.query;

  const [comicDetails, setComicDetails] = useState<ComicDetails | null>(null);

  useEffect(() => {
    if (uid) {
      const getComicDetails = async () => {
        const data = await fetchComicDetails(uid as string);
        setComicDetails(data);
      };
      getComicDetails();
    }
  }, [uid]);

  // TODO: replace this with loading animation
  if (!comicDetails) return <div>Loading...</div>;

  return (
    <div className="flex bg-finalChapterBlack flex-col min-h-screen">
      <ComicProfileBanner
        views={123}
        imgSrc={'/comic_home_page_banner.png'}
        title={'Revenant'}
      />
      <div className="py-4">
        <ComicDetailsTab
          views={123}
          imgSrc={'https://wallpapercave.com/wp/wp5501287.png'}
          title={'Revenant'}
        />
      </div>
    </div>
  );
}
