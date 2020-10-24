import React, { useState, useEffect } from "react";
import "./App.css";
// import BookInfo from "./components/Books" 
import { Provider } from "use-react-modal";
import SingleBook from "./components/singlebook";


const SearchInfo = () => {
  const [number, setNumber] = useState("");

  const handleChangeNumber = (e) => {
    e.preventDefault();

    setNumber(e.target.value)
  }
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
      return "Ładuję dane";
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

  return (
    <div>
      
      <div className="">
        <div className="header">
          <h1 className="">Twoja baza książek</h1>
          <p className="">
            Wyszukuj swoje ulubione książki. Dane dostarcza <a href="https://developers.google.com/" target="_blank">Google API</a>.
          </p>
        </div>
      </div>
      <form onSubmit={handleChangeNumber}>

        <div className="MainBox" >
          <label>
            <input
              placeholder="Wpisz tytuł"
              type="text"
              value={number}
              onChange={handleChangeNumber}
              // onChange={change}
            >
            </input>
            <button type="button"
              // onClick={handleClick}
              // onClick={handleChangeNumber}s
            >Szukaj</button>
          </label>
        </div>
        
      </form>
      <div className="content-container">

        {number ? (
          <>
            <Provider background="rgba(0, 0, 0, 0.9)">
              <BookInfo number={number} />
            </Provider>
          </>
        ) : (
            <div className="MainBox">
              Zacznij pisać, aby wyszukać swoją ulubioną książkę
            </div>
          )}
      </div>
    </div>
  );
}
export default function App() {
  return (

    <SearchInfo>
    </SearchInfo>



  )
}
