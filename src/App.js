import React, { useState, useEffect } from "react";
import "./App.css";
// import {
//   BrowserRouter,
//   Route,
//   Switch,
// } from "react-router-dom";
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { Route, useHistory } from 'react-router-dom';

const API_URL = "https://www.googleapis.com/books/v1/volumes?q=isbn:";


const SearchInfo = () => {
  const [number, setNumber] = useState("");

  const handleChangeNumber = (e) => {
    setNumber(e.target.value)
  }
  // console.log(number)
  let history = useHistory();
  let url = ` ${API_URL}${number}`;

  function handleClick() {
    history.push(url);
  }

  const BookInfo = ({ number }) => {
    const [items, setItems] = useState([]);
    const [error, setError] = useState("");
    const isbn = number;
    // const [number, setNumber] = useState("");
    console.log(isbn)

    // const handleChangeNumber = (e) => {
    //   setNumber(e.target.value)
    // }

    useEffect(() => {
      fetch(`${API_URL}${isbn}`)
        .then(resp => resp.json())
        .then(data => {
          if (data.items) {
            setItems(data.items);
          } else {
            setError("Brak pozycji, sprawdź poprawność numeru ISBN");
          }
        })
        .catch(() => {
          setError("Bład serwera");
        });
    }, []);

    if (error) {
      return error;
    }
    if (items.length === 0) {
      return "Trwa ładowanie";
    }
    // if (items.volumeInfo.imageLinks.length === 0){
    //   return "Brak zdjęcia"
    // }
    return (
      <div className="MainBox">
        <ul>
          {items.map(item => {
            return (
              <div className="TitleName">
                <img src={item.volumeInfo.imageLinks.thumbnail} alt="okładka"></img>
                <li key={item.id}>
                  <span>Tytuł:</span> {item.volumeInfo.title}<br />
                  <span>Autor:</span> {item.volumeInfo.authors}<br />
                  <span>Data publikacji:</span> {item.volumeInfo.publishedDate}  <br />
                  <span>Opis:</span> {item.volumeInfo.description}  <br />
                  <span>Kategoria:</span> {item.volumeInfo.categories}  <br />

                </li>
              </div>
            );
          })}
        </ul>
      </div>
    );
  };


  return (
    <>
      <div className="MainBox">
        <label>
          <input
            placeholder="Wpisz numer ISBN"
            type="text"
            value={number}
            // onChange={handleClick}
            onChange={handleChangeNumber}
          >
          </input>
          <button type="button"
            onClick={handleClick}
          >Szukaj</button>
        </label>
      </div>
      {number ? (
        <BookInfo number={number} />
      ) : (
          <div className="MainBox">
            Wpisz numer ISBN, aby wyszukać swoją ulubioną książkę
          </div>
        )}
    </>
  );
}



export default function App({ API_URL, number }) {
  //   let url = number;
  // let newUrl = API_URL ;
  return (
    // <BrowserRouter>
    //   <Switch>
    <Router>
      {/* <Route> */}
      <Link to={`/${number}`} value={number} />
      <SearchInfo>
        <Route path="/:number" component={SearchInfo}></Route>
      </SearchInfo>

      {/* </Link> */}
      {/* </Route> */}
    </Router>


  )
}
