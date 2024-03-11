import { SearchBar } from '../SearchBar/SearchBar';
import { fetchArticles } from '../api';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { Loader } from '../Loader/Loader';
import { LoadMoreBtn } from '../LoadMoreBtn/LoadMoreBtn';
import {useState, useEffect} from 'react';
import './App.css'




export const App = () => {
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState("");
    const [images, setImages] = useState([]);
    const [total, setTotal] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);


    const handleSearchSubmit = async (newQuery) => {
        setQuery(`${Date.now()}/${newQuery}`);
        setPage(1);
        setImages([]);
        setTotal(null);
      };

      const handleLoadMore = () => setPage(page + 1);

    useEffect(() => {
        if (query === "") return;
    
        async function fetchData() {
          try {
            setLoading(true);
            setError(false);
            const fetchedData = await fetchArticles(query.split("/")[1], page);
            setImages((prevResults) => [...prevResults, ...fetchedData.results]);
            setTotal(fetchedData.total);
          } catch {
            setError(true);
          } finally {
            setLoading(false);
          }
        }
    
        fetchData();
      }, [query, page]);

    return (
      <>
         <SearchBar onSearch={handleSearchSubmit} />
      {error ? (
        <ErrorMessage>Something wrong? try again!</ErrorMessage>
      ) : images.length > 0 ? (
        <ImageGallery imgs={images} />
      ) : null}
      {total === 0 && <ErrorMessage>No results found</ErrorMessage>}
      {loading && <Loader />}
      {images.length > 0 && page * 9 <= total && !loading && !error && (
        <LoadMoreBtn loadMore={handleLoadMore} />
      )}
      </>
      
    );
  };

