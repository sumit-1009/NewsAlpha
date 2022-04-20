
import React from 'react'

const NewsItem = (props)=> {
   
        let {title, description, imageUrl, newsUrl, author, date, source} = props;
        return (
            <div className='my-3'>
                <div className="card">
                    <div style={{display:'flex',
                     justifyContent:'flex-end',
                     position: 'absolute',
                     right: 0}}>
                    <span className=" badge rounded-pill bg-primary">{source}
                    </span>
                    </div>
                    <img src={!imageUrl?"https://images.hindustantimes.com/tech/img/2022/04/15/1600x900/Windows_11_(7)_1633403699297_1650017692498.jpg":imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}
                            <span className="visually-hidden">unread messages</span>
                            </h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text d-flex justify-content-center"><small className="text-muted">By {!author?"Unknown": author} on {new Date(date).toGMTString()}</small></p>
                            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark d-flex justify-content-center">Read More</a>
                        </div>
                </div>
            </div>
        )

}

export default NewsItem
