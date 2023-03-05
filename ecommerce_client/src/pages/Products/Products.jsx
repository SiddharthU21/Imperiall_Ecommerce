import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { PlusIcon , MinusIcon} from '@heroicons/react/24/outline'
import List from "../../components/List/List";
import useFetch from "../../hooks/useFetch";
import "./Products.scss";

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(500);
  const [sort, setSort] = useState('asc');
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );


  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handleChange}
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span onClick={()=> maxPrice > 0 && setMaxPrice(maxPrice-20) }><MinusIcon className="icon-hero"/></span>
            <input
              type="range"
              id="range"
              min={0}
              max={1000}
              value={maxPrice}
              readOnly
            />
            <label htmlFor="range" id="value">Under ${maxPrice}</label>
            <span onClick={()=> maxPrice < 1000 && setMaxPrice(maxPrice+20) }><PlusIcon className="icon-hero"/></span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
              defaultChecked
            />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          src={catId === 1 ? 
              "https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
             : catId === 2 ?
             "https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
             : "https://images.pexels.com/photos/6941446/pexels-photo-6941446.jpeg?auto=compress&cs=tinysrgb&w=1600"
          }
          alt=""
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>
      </div>
    </div>
  );
};

export default Products;
