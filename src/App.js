import React, { useState} from "react";
import "./App.css";
import BookInfo from "./components/Books"
import { Provider } from "use-react-modal";

const SearchInfo = () => {
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");

  const API_URL = "https://www.googleapis.com/books/v1/volumes?q=intitle:";
  const data = {
    key: "AIzaSyAYqfMYbCl0IxItamsRqvXqJXfX2kcwhXI",
    source: 'pl',
  }
  const urlData = new URLSearchParams(Object.entries(data));

  const handleChangeNumber = e => {
    e.preventDefault();
    let tempError = "";

    if (tempError === "") {
      fetch(`${API_URL}${search}&${urlData}`)
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
    }

    if (error) {
      return error;
    }
   
  }
  const change = e => {
    setSearch(e.target.value)

  };

  const Filter = () => {
    let itemsFiltred = items;
    const MountaineersCategory = itemsFiltred.filter((item) => item.volumeInfo.categories);
    setItems(MountaineersCategory)
    console.log(MountaineersCategory.toString())
  }

  const FilterDisc = () => {
    const Discription = items.filter((item) => item.volumeInfo.description);
    setItems(Discription)
  }
  const ClearAll = () => {
    setItems([]);
    setError("Wpisz tytuł, aby wyszukać swoją ulubioną książkę")
    setSearch("");
  }
  return (
    <div>
      <div className="">
        <div className="header">
          <h1 className="">Twoja baza książek</h1>
          <p className="">
            Wyszukuj swoje ulubione książki. Dane dostarcza <a href="https://developers.google.com/" target="_blank" rel="noopener noreferrer">Google API</a>.
          </p>
        </div>
      </div>
      <form onSubmit={handleChangeNumber}>
        <div className="MainBox" >
          <label>
            <input
              placeholder="Wpisz tytuł"
              type="search"
              onChange={change}
            >
            </input>
            <button type="submit">Szukaj</button>
          </label>
        </div>
      </form>
      <div className="content-container">
            <>
              <Provider background="rgba(0, 0, 0, 0.9)">
                <BookInfo items={items} ClearAll={ClearAll} FilterDisc={FilterDisc} Filter={Filter} />
              </Provider>
            </>
      </div>
    </div>
  );
}

export default function App() {
  return <SearchInfo />
}
