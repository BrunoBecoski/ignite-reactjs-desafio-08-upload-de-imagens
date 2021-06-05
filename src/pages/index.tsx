import { Button, Box } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { api } from '../services/api';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';

export default function Home(): JSX.Element {
  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    'images',
    // TODO AXIOS REQUEST WITH PARAM
    async (params) => {

      if(params.pageParam === undefined) {
        params.pageParam = null
      }      

      const { data } = await api.get('/api/images', { 
        params: {
          after: params.pageParam
        }
      })
               
      return data;
    },
    // TODO GET AND RETURN NEXT PAGE PARAM
    {
      getNextPageParam: (data) => {
        if(data.after === undefined) {
          return null;
        } else {
          return data.after;
        }
      }
    }
    );
    
    const formattedData = useMemo(() => {
      // TODO FORMAT AND FLAT DATA ARRAY

      console.log(data.pages[0].data)
    return [];
  }, [data]);

  // TODO RENDER LOADING SCREEN

  // TODO RENDER ERROR SCREEN

  return (
    <>
      <Header />

      <Box maxW={1120} px={20} mx="auto" my={20}>
        <CardList cards={formattedData} />
        {/* TODO RENDER LOAD MORE BUTTON IF DATA HAS NEXT PAGE */}
      </Box>
    </>
  );
}
