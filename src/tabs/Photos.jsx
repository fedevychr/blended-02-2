import { getPhotos } from 'apiService/photos';
import { Button, Form, Loader, PhotosGallery, Text } from 'components';
import { useEffect, useState } from 'react';

export const Photos = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (!query) return;

    const fetchPhotos = async () => {
      setLoader(true);
      try {
        const data = await getPhotos(query, page);
        console.log('data: ', data);
        setPhotos(prevPhotos => [...prevPhotos, ...data.photos]);
      } catch (e) {
        console.log(e);
      } finally {
        setLoader(false);
      }
    };
    fetchPhotos();
  }, [page, query]);

  const onSubmit = newQuery => {
    setQuery(newQuery);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <Form onSubmit={onSubmit} />
      {photos.length === 0 && (
        <Text textAlign="center">Let`s begin search 🔎</Text>
      )}
      <PhotosGallery photos={photos} />
      {photos.length > 0 && <Button onClick={handleLoadMore}>Load more</Button>}
      {loader && <Loader />}
    </>
  );
};
