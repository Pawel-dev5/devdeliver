import React from "react";
const Modal1 = ({ item }) => {
    if (item.volumeInfo.imageLinks === undefined) {
        return (
            <>
                <div className="Modal">
                    <div className="TitleName">
                        <div className="imgBox">
                            <img alt="okładka"></img>
                        </div>
                        <div>
                            <li key={item.id}>
                                <h4>{item.volumeInfo.title} </h4><br />
                                <p>{item.volumeInfo.subtitle}</p>
                                <p className="modalDes">{item.volumeInfo.description}</p>   <br />
                                <span>Autor:</span> {item.volumeInfo.authors} <br />
                                <span>Data publikacji:</span> {item.volumeInfo.publishedDate}  <br />
                                <span>Kategorie:</span> {item.volumeInfo.categories}  <br />
                                <br /><br />
                            </li>
                        </div>
                    </div>
                </div>
            </>
        )
    } else
        return (
            <>
                <div className="Modal">
                    <div className="TitleName">
                        <div className="imgBox">
                            <img src={item.volumeInfo.imageLinks.thumbnail} alt="okładka"></img>
                        </div>
                        <div>
                            <li key={item.id}>
                                <h4>{item.volumeInfo.title} </h4><br />
                                <p>{item.volumeInfo.subtitle}</p>
                                <p className="modalDes">{item.volumeInfo.description}</p>   <br />
                                <span>Autor:</span> {item.volumeInfo.authors} <br />
                                <span>Data publikacji:</span> {item.volumeInfo.publishedDate}  <br />
                                <span>Kategorie:</span> {item.volumeInfo.categories}  <br />
                                <br /><br />
                            </li>
                        </div>
                    </div>
                </div>
            </>
        )
}

export default Modal1;