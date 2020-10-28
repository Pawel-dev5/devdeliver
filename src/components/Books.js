import React from "react";
import { Route } from "react-router-dom";
import SingleBook from "./singlebook";
import BookPage from "./BookPage";

const BookInfo = (props) => {
    const {
        items,
        Filter,
        FilterDisc,
        ClearAll,
    } = props

    return (
        <>
            {items.length === 0 ? (
                <>
                    <div className="MainBox">
                        Wpisz tytuł, aby wyszukać swoją ulubioną książkę
                    </div>
                </>
            ) : (
                    <>
                        <div className="filterButtons">
                            <button onClick={Filter}>Pokaż tylko<br />z kategorią</button>
                            <button onClick={FilterDisc}>Pokaż tylko<br />z opisem</button>
                            <button onClick={ClearAll}>Wyczyść<br />wszystko</button>
                        </div>
                    </>
                )}
            {items.map(item => <SingleBook item={item} key={item.id} />)}
            <Route path="book">
                <BookPage item={items} key={items.id}>
                    {/* {items.map(item => <SingleBook item={item} key={item.id} />)} */}
                </BookPage>
            </Route>
        </>
    );
};

export default BookInfo;