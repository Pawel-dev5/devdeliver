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
  //   let url = number;
  // let newUrl = API_URL ;
  return (

    <SearchInfo>
      {/* <Route path="/:number" component={SearchInfo}></Route> */}
    </SearchInfo>



  )
}

// import React, {useState} from "react";
// import {MOVIES_FETCH, MOVIES_FETCH_ERROR} from "./Actions";
// // import Navigation from "./Components/Navigation";
// import Search from "../src/components/Search";
// import Books from "../src/components/Books";
// // import Footer from "./Components/Footer";

// const App = () => {
//   const [books, setBooks] = useState([]);
//   const [error, setError] = useState(false);
//   const dispatch = (action) => {
//     switch (action.type) {
//       case MOVIES_FETCH: {
//         setBooks(action.payload);
//         setError(false);
//         break;
//       }

//       case MOVIES_FETCH_ERROR: {
//         setBooks([]);
//         setError(action.payload);
//         break;
//       }

//       default:
//         console.warn("You should specify action type.");
//     }
//   };

//   console.log(books)
//   return (
//     <>
//       {/* <Navigation/> */}

//       <div className="jumbotron jumbotron-fluid">
//         <div className="container">
//           <h1 className="display-4">Twoja baza filmów</h1>
//           <p className="lead">
//             Wyszukuj swoje ulubione filmy. Dane dostarcza <a href="https://www.themoviedb.org" target="_blank" rel="noopener noreferrer">The Movie
//             DB</a>.
//           </p>
//         </div>
//       </div>

//       <div className="container py-5">
//         <div className="row">
//           <div className="col-md text-center">
//             <h3 className="lead">Znajdź swój ulubiony film!</h3>
//             <Search dispatch={dispatch}/>
//           </div>
//         </div>
//       </div>

//       {error !== false && <div className="col-md text-center"><h3>{error.message}</h3></div>}
//   <Books books={books}/>
//       {/* <Footer/> */}
//     </>
//   );
// };

// export default App;
