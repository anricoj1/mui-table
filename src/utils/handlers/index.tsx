// react query
import { useQuery } from 'react-query';


//** get data from api */
export const useGetComments = () => {
    const getComments = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        return response.json();
    }

    return useQuery('comments', getComments);
}