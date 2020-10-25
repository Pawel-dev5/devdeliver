import React from "react";
import useModal from "use-react-modal";
import _ from "lodash";
import Modal1 from "../components/modal"

const SingleBook = ({ item }) => {
    const { openModal, isOpen, closeModal, Modal } = useModal({});

    if (item.volumeInfo.imageLinks === undefined) {
        return (
            <>
                <div className="singleBook" onClick={openModal}>
                    <div className="bookTitleName">
                    <div className="imgBookBox">
                            <img src="/" alt="okładka"></img>
                        </div>
                        <h1>{item.totalItems}</h1>
                        <li key={item.id} >
                            <span>Tytuł:</span> {item.volumeInfo.title} {item.volumeInfo.subtitle}<br />
                            <span>Autor:</span> {item.volumeInfo.authors} <br />
                            <span>Data publikacji:</span> {item.volumeInfo.publishedDate}  <br />
                            <span>Opis:</span> {item.volumeInfo.description}  <br />
                            <span>Kategorie:</span> {item.volumeInfo.categories}  <br /><br />
                            <button onClick={openModal}>Więcej informacji</button>
                            <br /><br /><br />
                            <div className="ModalBox">
                                {isOpen && (
                                    <Modal >
                                        <div className="Close" onClick={_.debounce(closeModal, 300)}>
                                            <a href="/">X</a>
                                        </div>
                                        <Modal1 item={item} key={item.id} />
                                    </Modal>
                                )}
                            </div>
                        </li>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="singleBook" onClick={openModal}>
                    <div className="bookTitleName">
                        <div className="imgBookBox">
                            <img src={item.volumeInfo.imageLinks.thumbnail} alt="okładka"></img>
                        </div>
                        <h1>{item.totalItems}</h1>

                        <li key={item.id} >
                        <span>Tytuł:</span> {item.volumeInfo.title} {item.volumeInfo.subtitle}<br />
                            <span>Autor:</span> {item.volumeInfo.authors} <br />
                            <span>Data publikacji:</span> {item.volumeInfo.publishedDate}  <br />
                            <span>Opis:</span> {item.volumeInfo.description}  <br />
                            <span>Kategorie:</span> {item.volumeInfo.categories}  <br /><br />
                            <button onClick={openModal}>Więcej informacji</button>
                            <br /><br /><br />
                            <div className="ModalBox">
                                {isOpen && (
                                    <Modal item={item} key={item.id}>
                                        <div className="Close" onClick={_.debounce(closeModal, 300)}>
                                        <a href="/">X</a>
                                        </div>
                                        <Modal1 item={item} key={item.id} />
                                    </Modal>
                                )}
                            </div>
                        </li>
                    </div>
                </div>
            </>
        )
    }
}
export default SingleBook;