import {React, useEffect, useState} from 'react'
import CategoryCard from '../Categories/CategoryCards'

export default function Categories() {
  const [categoryCount, setCategoryCount] = useState([]);

  // fetching the category list
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then(response => response.json())
      .then((response) => setCategoryCount(response.categories))
    }, []);
  return (
    <>
      <div className="section-center">
        {/* iterating through the category array */}
        {categoryCount.map((item,index)=>{return <CategoryCard category={item} key={index}/>})}
      </div>
    </>  
  )
}