import React from 'react'

export const useFetcher = (props) => {
    const [loading, setLoading] = React.useState(true)
    const [parsedData, setParsedData] = React.useState();

    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=68bbb6a17b2f42c092d50b1d5e4f8029&page=${props.page}&pageSize=${props.pageSize}`;
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=64ffe441ae0249dcaf5bf48d536a480d&page=${props.page}&pageSize=${props.pageSize}`;
    
    React.useEffect(() => {
        setLoading(true);
        (async () => {
            try {
                let data = await fetch(url);
                let parsedData = await data.json();
                setParsedData(parsedData);
                
            } catch (err) {
                throw new Error(err);
            } finally {
                setLoading(false);
            }
        })();
    }, [url])

    return {loading, parsedData}
}
