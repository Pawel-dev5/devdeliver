import React, { useState, useEffect } from "react";
import "./App.css";
// import {
//   BrowserRouter,
//   Route,
//   Switch,
// } from "react-router-dom";
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { Route, useHistory } from 'react-router-dom';
import SingleBook from "./components/singlebook";
import useModal, { Provider } from "use-react-modal";

const API_URL = "https://www.googleapis.com/books/v1/volumes?q=intitle:";


const SearchInfo = () => {
  const [number, setNumber] = useState("");


  const data = {
    key: "AIzaSyAYqfMYbCl0IxItamsRqvXqJXfX2kcwhXI"
  }
  console.log(data)
  const urlData = new URLSearchParams(Object.entries(data));

  const handleChangeNumber = (e) => {
    setNumber(e.target.value)
  }
  // console.log(number)
  let history = useHistory();
  let url = ` ${API_URL}${number}`;

  function handleClick() {
    history.push("")
    history.push(url);
  }

  const BookInfo = ({ number }) => {
    const [items, setItems] = useState([]);
    const [itemsFiltred, setItemsFiltred] = useState([]);
    const [error, setError] = useState("");


    const isbn = number;
    console.log(isbn)

    useEffect(() => {
      fetch(`${API_URL}${isbn}&${urlData}`)
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
    const ClearFilters = () => {

      setItems(items);
    }

    const Filter = () => {
      let itemsFiltred = items
      const MountaineersCategory = itemsFiltred.filter((item) => item.volumeInfo.categories);
      // const MountaineersCategory = items.filter(Mount);

      setItemsFiltred(MountaineersCategory)

      console.log(MountaineersCategory)
      // return(
      // <ul>
      //   {MountaineersCategory.map(cat => {
      //     return (
      //       <div>
      //         <li>
      //         <span>Categories:</span> {cat.volumeInfo.categories}  <br />

      //         </li>
      //       </div>
      //     )
      //   })}
      // </ul>
      // )
    }
    // console.log(Filter(items, 'ap'))  // ['apple', 'grapes']

    const FilterDisc = () => {
      const Discription = items.filter((item) => item.volumeInfo.description);
      setItems(Discription)
    }
    // if (items.volumeInfo.imageLinks.length !== 0) {
    //   return "Brak zdjęcia"
    // }

    console.log(items)
    console.log(itemsFiltred)

    if (items && items.length) {
      return (
        <>
          <button onClick={Filter}>Filtruj</button>
          <button onClick={FilterDisc}>Pokaż tylko te z opisem</button>
          <button onClick={handleChangeNumber} value={items}>Wyczyść filty</button>

          <SingleBook items={items} key={items.id} />
        </>
      );
    } else {
      return <div>No items found</div>
    }
  };


  return (
    <>
      <div className="MainBox">
        <label>
          <input
            placeholder="Wpisz tytuł"
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
        <>
          <Provider background="rgba(0, 0, 0, 0.9)">

            <BookInfo number={number} key={number.id} />
          </Provider>

        </>
      ) : (
          <div className="MainBox">
            Zacznij pisać, aby wyszukać swoją ulubioną książkę
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
      {/* <SingleBook number={number} key={number.id}/> */}
      {/* <Route> */}
      <Link to={`/${number}`} value={number} />
      <SearchInfo>
        {/* <Route path="/:number" component={SearchInfo}></Route> */}
      </SearchInfo>

      {/* </Link> */}
      {/* </Route> */}
    </Router>


  )
}
