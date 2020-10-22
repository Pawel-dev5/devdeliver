import React, { useState, useEffect } from "react";
import "./App.css";

const API_URL = "https://www.googleapis.com/books/v1/volumes?q=isbn:";


const SearchInfo = () => {
  const [number, setNumber] = useState("");

  const handleChangeNumber = (e) => {
    setNumber(e.target.value)
  }
  // console.log(number)


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
            setError("BRAK");
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
    return (
      <div>
        <ul>
          {items.map(item => {
            return <li key={item.id}>{item.volumeInfo.title}</li>;
          })}
        </ul>
      </div>
    );
  };

  return (
    <>
      <div>
        <label>
          <input
            type="text"
            value={number}
            onChange={handleChangeNumber}>
          </input>
        </label>
      </div>
      <BookInfo number={number} />
    </>
  );
}



export default function App() {
  return (
    <SearchInfo />
  )
}
