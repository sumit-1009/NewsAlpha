import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import {updateNews, capitalizeFirstLetter} from "../utils";

const News = (props)=> {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    
    useEffect(() => {
        const {loading, parsedData} = updateNews();
        setLoading(loading);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
    }, [])

    const fetchMoreData = () => {
        setPage(page + 1);
        const {loading, parsedData} = updateNews({country: "IN"});
        setLoading(loading);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
    }

    // const fetchMoreData = async () => {
    //     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=68bbb6a17b2f42c092d50b1d5e4f8029&page=${page+1}&pageSize=${props.pageSize}`;
    //     setLoading(true);
    //     setPage(page+1);
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     setArticles(articles.concat(parsedData.articles));
    //     setTotalResults(parsedData.totalResults);
    //     setLoading(false);
    //   };

        return (
            <>
                <h1 className="text-center" style={{ margin: '35px 0px;', marginTop: '80px' }}>NewsAlpha - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    // loader= {<Spinner />}
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

News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News
