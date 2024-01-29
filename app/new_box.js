import React from 'react';

const NewsBox = ({ datas }) => {
  return (
    <div className="flex-container news-box">
       {datas.map((data, index) => (
            <div key={index} className="col-4 news-item">
                <h1>{data.title}</h1>
                <p>{data.description}</p>
            </div>
        ))}
    </div>
  );
};

export default NewsBox;

