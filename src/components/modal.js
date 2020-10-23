import React from "react";
import _ from "lodash";
import useModal from "use-react-modal";

const API = "https://www.googleapis.com/books/v1/volumes/"

const Modal1 = ({item, index}) => {
    // const { closeModal } = useModal({
    // });
    console.log(item)

    // const title = item.title
    // console.log(title)
//     const newItem = item[0]

// console.log(newItem)

    return(
        <>
        

       <div className="Modal">
                <ul>
                    {item.map(item => {
                        console.log(item)   
// console.log(item.etag)
console.log(item.selfLink.toString())

                        return (
                            <>
                                <div className="TitleName">
                                    {/* <img src={item.volumeInfo.imageLinks.thumbnail} alt="okładka"></img> */}
                                    <li key={item.id}>
                                        <span>
                                            {/* {`https://www.googleapis.com/books/v1/volumes/ndBCDwAAQBAJ`${item.kind}}S */}
                                        </span>
                                    {/* {`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} */}

                                        <span>Title:</span> {item.volumeInfo.title} {item.volumeInfo.subtitle}<br />
                                        <span>Author:</span> {item.volumeInfo.authors} <br />
                                        <span>Published date:</span> {item.volumeInfo.publishedDate}  <br />
                                        <span>Description:</span> {item.volumeInfo.description}  <br />
                                        <span>Categories:</span> {item.volumeInfo.categories}  <br />
                                        {/* <button onClick={openModal}>Więcej informacji</button> */}
                                        <br /><br />
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

export default Modal1;