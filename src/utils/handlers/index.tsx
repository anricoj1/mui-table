//** get data from api */
export const getComments = async (): Promise<any> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    return response.json();
}