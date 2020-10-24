import React from "react";

const Modal1 = ({ item }) => {
const link = item.volumeInfo.imageLinks;
console.log(link)
    if (item.length === null) {
        return null
    }else
    return (
        <>
            <div className="Modal">
                <div className="TitleName">
                    <img src={item.volumeInfo.imageLinks.thumbnail} alt="okładka"></img>
                    <li key={item.id}>
                        <span>
                        </span>
                        <span>Title:</span> {item.volumeInfo.title} {item.volumeInfo.subtitle}<br />
                        <span>Author:</span> {item.volumeInfo.authors} <br />
                        <span>Published date:</span> {item.volumeInfo.publishedDate}  <br />
                        <span>Description:</span> {item.volumeInfo.description}  <br />
                        <span>Categories:</span> {item.volumeInfo.categories}  <br />
                        <br /><br />
                    </li>
                </div>
            </div>
        </>
    )
}

export default Modal1;