import React, { useState, useEffect } from "react";
import SingleBook from "./singlebook";

const BookInfo = ({ number }) => {
    const [items, setItems] = useState([]);
    const [itemsFiltred, setItemsFiltred] = useState([]);
    const [error, setError] = useState("");
    
    const API_URL = "https://www.googleapis.com/books/v1/volumes?q=intitle:";
    const data = {
        key: "AIzaSyAYqfMYbCl0IxItamsRqvXqJXfX2kcwhXI"
      }
      console.log(number)
      const urlData = new URLSearchParams(Object.entries(data));
    const isbn = number;
    console.log(isbn)

    useEffect(() => {
      fetch(`${API_URL}${number}&${urlData}`)
        .then(resp => resp.json())
        .then(data => {
          if (data.items) {
            setItems(data.items);
          } else {
            setError("Brak danych");
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
      return "Brak danych";
    }

    const Filter = () => {
      let itemsFiltred = items
      const MountaineersCategory = itemsFiltred.filter((item) => item.volumeInfo.categories);
      setItemsFiltred(MountaineersCategory)
      console.log(MountaineersCategory)
    }

    const FilterDisc = () => {
      const Discription = items.filter((item) => item.volumeInfo.description);
      setItems(Discription)
    }

    console.log(items)
    console.log(itemsFiltred)

    if (items && items.length) {
      return (
        <>
        <div className="filterButtons">
          <button onClick={Filter}>Filtruj</button>
          <button onClick={FilterDisc}>Pokaż tylko te z opisem</button>
          <button>Wyczyść wszystko</button>
        </div>

          {items.map(item => <SingleBook item={item} key={item.id} />)}
        </>
      );
    } else {
      return <div>No items found</div>
    }
  };

  export default BookInfo;