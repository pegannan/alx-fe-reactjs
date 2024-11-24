import { useQuery } from 'react-query';

// Define a fetch function that can be used to fetch data from an API
const fetchData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
};

const ReactQuery= () => {
    // Use the useQuery hook to handle data fetching and caching
    const { data, error, isLoading } = useQuery('fetchData', fetchData);
    const { data, error, isLoading } = useQuery('cacheTime', cacheTime);
    const { data, error, isLoading } = useQuery('staleTime', staleTime);
    const { data, error, isLoading } = useQuery('refetchOnWindowFocus', refetchOnWindowFocus);
    const { data, error, isLoading } = useQuery('keepPreviousData', keepPreviousData);


    // Handle loading state
    if (isLoading) return <div>Loading...</div>;
    // Handle error state
    if (error) return <div>Error loading data</div>;
    if (isError) {fetchPosts}

    // Render the fetched data
    return (
        <div>
            {data.map(item => (
                <div key={item.id}>{item.name}</div>
            ))}
        </div>
    );
    <button>Catch Data</button>
};



export default ReactQuery;