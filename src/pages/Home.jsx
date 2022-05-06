import React from 'react'
import NewsItem from '../components/NewsItem';
import Spinner from '../components/Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
import {useFetcher, capitalizeFirstLetter} from "../utils";

export const Home = () => {
    const [articles, setArticles] = React.useState([])
    const [page, setPage] = React.useState(1)
    const {loading, parsedData} = useFetcher({country: "in", category: "general", pageSize: 9, page: page});
    const [totalResults, setTotalResults] = React.useState(0)

    React.useEffect(() => {
        console.log(parsedData, loading);
        if (!loading) {
            setArticles(parsedData.articles);
            setTotalResults(parsedData.totalResults)
        }
    }, [page, loading, parsedData])

    const handlePageChange = React.useCallback(() => {
        setPage(page + 1);
        console.log(page);
    }, [page])

        return (
            <>
                <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '80px' }}>NewsAlpha - Top {capitalizeFirstLetter("general")} Headlines</h1>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={handlePageChange}
                    hasMore={articles.length !== totalResults}
                >
                    <div className="container">
                    <div className="row">
                        {articles.map((element) => (
                            <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        ))}
                    </div>
                    </div>
                </InfiniteScroll>
            
            </>
        )
}
