import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  //document.title = `${props.category} - NewsMonkey`;

  const updateNews = async () => {
    console.log("I am in updateNews");
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e7085819c05b40ddb056cb490a9c770e&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    
    let data = await fetch(url);
    props.setProgress(30);
    
    let parseData = await data.json();
    props.setProgress(70);
    
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false);
    props.setProgress(100);
    
  };

  useEffect(() => {
    console.log("I am in useEffect");
    document.title = `${props.category} - NewsMonkey`;
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    console.log("I am in fetch more data");
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e7085819c05b40ddb056cb490a9c770e& page=${page+1} &pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(articles.concat(parseData.articles));
    setTotalResults(parseData.totalResults);
  };

  return (
    <>
       console.log("I am in return");
      <h1 className="text-center" style={{margin:'35px 0px',marginTop:'90px'}} >
        NewsMonkey - Top {props.category} Headlines{" "}
      </h1>
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length != totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
