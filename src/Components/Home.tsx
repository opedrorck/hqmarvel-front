import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Comic } from "../interfaces/Comics";
import { getComics } from "../utils/api";
import Like from "../assets/imgs/Like.svg?react";
import LikeFill from "../assets/imgs/LikeFill.svg?react";
import { add, incremented, remove } from "../context/store";
import "../assets/css/Home.scss";


const Home: React.FC = () => {
  const dispatch = useDispatch();
  const offset = useSelector((state:{offset:number}) => state.offset);
  const likedComics = useSelector((state:{comics:number[]}) => state.comics);
  const [comics, setComics] = useState<Comic[]>([]);

  const handleLike = (id:number) => {
    if(likedComics.includes(id)){
      dispatch(remove(id))
    } else {
      dispatch(add(id))
    }
  }

  useEffect(() => {
    async function load() {
      const newComics = await getComics(offset);
      setComics([...comics, ...newComics]);
    }
    load();
  }, [offset]);

  return (
    <main className="main">
      <section className="comics">
      {comics.length > 0 &&
        comics.map((comic) => (
          <div className="comicContent" key={comic.id}>
            <img
              className="comic-Content-img"
              src={`${comic.thumbnail.path}/portrait_uncanny.${comic.thumbnail.extension}`}
              alt=""
            />
            <p className="title-comics">
              {comic.title.split(" (")[0].trim()}{" "}
              {comic.title.match(/#\d+/)?.[0]}
            </p>
            <div className="Productor-Date">
              <p>
                {comic.creators.items.length > 0
                  ? `${comic.creators.items[0].name}`
                  : "Alan Turnig"}
              </p>
              <p>
                {comic.title.match(/\((\d{4})\)/)?.[1]
                  ? comic.title.match(/\((\d{4})\)/)?.[1]
                  : "1999"}
              </p>
            </div>
            <button className="likeButton" onClick={()=>handleLike(comic.id)}>
              {likedComics.includes(comic.id)?
              <LikeFill className="like"/>:
              <Like className="unlike"/>}
            </button>
          </div>
        ))}
        <button className="loadButton" onClick={() => dispatch(incremented())}>Carregar mais</button>
      </section>
    </main>
  );
};

export default Home;
