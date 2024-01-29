"use client"
import React, { useState } from 'react';
import NewsBox from './new_box.js';

const NewsData = () => {
  const [news, setNews] = useState([
    {
      id: 0,
      title: "Echoes of Defeat: A Personal Reflection on India’s 2023 World Cup Loss",
      description: "The first one read, “India's loss in the 2023 World Cup final has echoes of West Indies' defeat in the 1983 World Cup final.” The parallels are ....."
    },
    {
      id: 1,
      title: "Chandrayaan-3 : India's Imperatives for Space Leadership",
      description: "Chandrayaan-3's exploration of the lunar south pole signifies a new era in India's space endeavors.This achievement presents an opportunity ..."
      
    },
    
    {
      id: 2,
      title: "UN DESA Policy Brief No. 153: India overtakes China as the world’s most populous country",
      description: "In April 2023, India's population is expected to reach 1,425,775,850 people, matching and then surpassing the population of mainland China ( ..."
      }
  ]);

  return (
      <NewsBox datas={news}/>
    )
    
    
};

export default NewsData;

