import React, { Component } from 'react';
import "./Choice.css"

function Choice (props){
    return (
        <div className="Choice">
            {props.films.map((film) =>{
                return (<div className="Block Block-1">
                    <a href="#"><img src={film.foto} alt=""/></a><p>Название фильма: {film.name}</p><p>Цена билета: {film.price} KGS</p>
                    <p>Кинотеатр: {film.location}</p><p>Время: {film.time}</p><p>Ваше место: {film.place}</p>
                    <button onClick={() => props.chooseFilm(film.id)}>Choose film</button>
                </div>)
            })}

        </div>
    );
}
export default Choice;
