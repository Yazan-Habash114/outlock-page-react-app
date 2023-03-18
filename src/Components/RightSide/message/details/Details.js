import React from 'react'
import { data } from "./data";
import DetailsItem from "./DetailsItem";

const Details = () => {

  return (
    <div>
      {data.map((item, index) => (
            <DetailsItem {...item} key={index} />
          ))}
    </div>
  )
}

export default Details