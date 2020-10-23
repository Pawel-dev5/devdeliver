import React from "react";
import useModal from "use-react-modal";
// import { Overlay } from 'react-portal-overlay';
import _ from "lodash";
import Modal1 from "../components/modal"

const SingleBook = ({ items, index }) => {
    const { openModal, isOpen, closeModal, Modal } = useModal({
    });

    // console.log(items[0])
    return (
        <>

            <div className="MainBox">
                <ul>
                    {items.map(item => {
                        console.log(items.selflink)

                        return (
                            <>
                                <div className="TitleName">
                                    {/* <img src={item.volumeInfo.imageLinks.thumbnail} alt="okładka"></img> */}
                                    <li key={index} onClick={openModal}>
                                        <span>Title:</span> {item.volumeInfo.title} {item.volumeInfo.subtitle}<br />
                                        <span>Author:</span> {item.volumeInfo.authors} <br />
                                        <span>Published date:</span> {item.volumeInfo.publishedDate}  <br />
                                        <span>Description:</span> {item.volumeInfo.description}  <br />
                                        <span>Categories:</span> {item.volumeInfo.categories}  <br /><br />
                                        <button onClick={openModal}>Więcej informacji</button>
                                        <br /><br /><br />
                                        <div className="ModalBox">

                                            {isOpen && (
                                                <Modal item={items} key={index}
                                                >
                                                    <div className="Close" onClick={_.debounce(closeModal, 300)}
                                                    >
                                                        {/* <p> */}
                                                        <a>
                                                            X

                                        </a>

                                                        {/* </p> */}
                                                    </div>
                                                    <Modal1 item={items} key={index}>

                                                    </Modal1>

                                                </Modal>
                                            )}
                                        </div>
                                    </li>
                                </div>
                            </>
                        );
                    })}
                </ul>
            </div>
        </>
    )
}
export default SingleBook;