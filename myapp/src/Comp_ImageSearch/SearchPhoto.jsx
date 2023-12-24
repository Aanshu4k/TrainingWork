import React,{useState} from "react";
import Unsplash,{toJson} from 'unsplash-js';
import './SearchPhoto.css';

const unsplash= new Unsplash({
    accessKey: "Kpk7bXxfl0usIjrHzz_Qi-KdXChGTovkhr3uwvMyR84"
})

const SearchPhoto=()=>{
    const [query,setQuery]=useState("");
    const [pics,setPics]=useState([]);
    const searchP= async(e)=>{
        e.preventDefault();
        unsplash.search
        .photos(query)
        .then(toJson)
        .then((json)=>{
            setPics(json.results);
        });
    }
    return(
        <div>
            <form onSubmit={searchP} className="form">
                <label htmlFor="query" className="label">
                    {" "}
                </label>
                <input type="text" name="query"
                className="input" 
                placeholder={'Try "landscape" or "Tokyo '}
                value={query}
                onChange={(e)=>{setQuery(e.target.value)}}
                />
                <button className="button" type="submit">Search</button>
            </form>
            <div className="card-list">
                {pics.map((pic)=>
                <div className="card" key={pic.id}>
                    <img src={pic.urls.full} alt={pic.alt_description} className="card-image" />
                </div>
                )}
            </div>
        </div>
    )
}
export default SearchPhoto;