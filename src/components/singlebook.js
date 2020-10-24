import React from "react";
import useModal from "use-react-modal";
// import { Overlay } from 'react-portal-overlay';
import _ from "lodash";
import Modal1 from "../components/modal"

const SingleBook = ({item}) => {
    const { openModal, isOpen, closeModal, Modal } = useModal({
    });

    // console.log(items[0])
    return (
        <>
            <div className="singleBook"  onClick={openModal}>
                <div className="TitleName">
                    {/* <img src={item.volumeInfo.imageLinks.thumbnail} alt="okładka"></img> */}
                    <li key={item.id} >
                        <span>Title:</span> {item.volumeInfo.title} {item.volumeInfo.subtitle}<br />
                        <span>Author:</span> {item.volumeInfo.authors} <br />
                        <span>Published date:</span> {item.volumeInfo.publishedDate}  <br />
                        <span>Description:</span> {item.volumeInfo.description}  <br />
                        <span>Categories:</span> {item.volumeInfo.categories}  <br /><br />
                        <span>Categories:</span> {item.volumeInfo.identifier}  <br /><br />

                        <button onClick={openModal}>Więcej informacji</button>
                        <br /><br /><br />
                        <div className="ModalBox">

                {isOpen && (
                    <Modal item={item} key={item.id}
                    >
                        <div className="Close" onClick={_.debounce(closeModal, 300)}
                        >
                            {/* <p> */}
                            <a>
                                X
                            </a>
                            {/* </p> */}
                        </div>
                        <Modal1 item={item} key={item.id}/>
                    </Modal>
                )}
                        </div>
                    </li>
                </div>
            </div>
        </>
    )
}
export default SingleBook;