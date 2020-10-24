import React from "react";
import useModal from "use-react-modal";
import _ from "lodash";
const Modal1 = ({ item }) => {
    const { openModal, isOpen, closeModal, Modal } = useModal({});

    const link = item.volumeInfo.imageLinks;
    console.log(link)
    if (item.volumeInfo.imageLinks === undefined) {
        return (
            <>
            <div className="Modal">
                    <div className="TitleName">
                        {/* <div className="Close" onClick={_.debounce(closeModal, 300)}>
                            <a>X</a>
                        </div> */}
                        <div className="imgBox">
                            <img  alt="okładka"></img>
                        </div>
                        <div>
                            <li key={item.id}>
                                <h4>{item.volumeInfo.title} </h4><br />
                                <p>{item.volumeInfo.subtitle}</p>
                                <p className="modalDes">{item.volumeInfo.description}</p>   <br />
                                <span>Author:</span> {item.volumeInfo.authors} <br />
                                <span>Published date:</span> {item.volumeInfo.publishedDate}  <br />
                                <span>Categories:</span> {item.volumeInfo.categories}  <br />
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
                        {/* <div className="Close" onClick={_.debounce(closeModal, 300)}>
                            <a>X</a>
                        </div> */}
                        <div className="imgBox">
                            <img src={item.volumeInfo.imageLinks.thumbnail} alt="okładka"></img>
                        </div>
                        <div>
                            <li key={item.id}>
                                <h4>{item.volumeInfo.title} </h4><br />
                                <p>{item.volumeInfo.subtitle}</p>
                                <p className="modalDes">{item.volumeInfo.description}</p>   <br />
                                <span>Author:</span> {item.volumeInfo.authors} <br />
                                <span>Published date:</span> {item.volumeInfo.publishedDate}  <br />
                                <span>Categories:</span> {item.volumeInfo.categories}  <br />
                                <br /><br />
                            </li>
                        </div>
                    </div>
                </div>
            </>
        )
}

export default Modal1;