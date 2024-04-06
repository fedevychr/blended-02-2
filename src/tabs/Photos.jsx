import { getPhotos } from 'apiService/photos';
import { Form, Text } from 'components';
import { useEffect, useState } from 'react';

export const Photos = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    if (!query) return;

    const fetchPhotos = async () => {
      try {
        const data = await getPhotos(query, page);
        console.log('data: ', data);
        setPhotos(data.photos);
      } catch (e) {
        console.log(e);
      }
    };
    fetchPhotos();
  }, [page, query]);

  const onSubmit = newQuery => {
    setQuery(newQuery);
  };

  return (
    <>
      <Form onSubmit={onSubmit} />
      <Text textAlign="center">Let`s begin search 🔎</Text>
    </>
  );
};
