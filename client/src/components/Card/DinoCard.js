
//     CButton
// } from "@coreui/react";


// export default function DinoCard() {

//     const [currentDino, setCurrentDino] = useState();
//     const handleClose = () => setShow(false);
//     const [show, setShow] = useState(false);
//     const handleShow = () => setShow(true);

//     const { loading, error, data } = useQuery(QUERY_DINOS);

//     if (loading) return 'Loading...';
//     if (error) return `Error! ${error.message}`;

//     return (
//         <div>
//         {data.dinos.map(dino => (
//             <CCard style={{ width: "18rem" }}>
//                 <CCardImage orientation="top" src={dino.imageURL} />
//                 <CCardBody>
//                     <CCardTitle>{dino.species}</CCardTitle>
//                     <CCardText>
//                         Will you be my mommy?
//                     </CCardText>
//                 </CCardBody>
//                 <CCardBody>
//                 <CButton  onClick={handleShow}>View Dino</CButton>
//              {currentDino === dino.name &&
//     
//             }   
//              {/* <Modal show={show} onHide={handleClose}>
//                 <DinoModel
//                 show ={show}
//                 handleClose={handleClose}
//                 name={dino.name}
//                 source={dino._id}/>
//              </Modal> */}
//                 </CCardBody>
//             </CCard>
//         ))}
//         </div>
//     );
// }

import React, {useState} from "react";
import { useQuery } from "@apollo/client"
import { QUERY_DINOS, QUERY_DINO } from "../../../src/utils/queries";
import Modal from 'react-bootstrap/Modal';
import DinoModel from "../Card/DinoModel";
import {
    CCard,
    CCardImage,
    CCardBody,
    CCardTitle,
    CCardText,
    CButton
} from "@coreui/react";
import { useQuery } from "@apollo/client";
import { QUERY_DINOS } from "../../utils/queries";


export default function DinoCard(props) {

    
    const handleClose = () => setShow(false);
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const [isCardOpen, setIsCardOpen] = useState(false);

    const [currentDino, setCurrentDino] = useState();
    const { loading, error, data } = useQuery(QUERY_DINOS);
    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;

    return (
        <div>
        {data.dinos.map(dino => (
            <CCard style={{ width: "18rem" }}>
                <CCardImage orientation="top" src={dino.imageURL} />
                <CCardBody>
                    <CCardTitle>{dino.name}</CCardTitle>
                    <CCardText>
                        Will you be my mommy?
                    </CCardText>
                </CCardBody>
                <CCardBody>
                <CButton  onClick={handleShow}>View Dino</CButton>
                    <Modal show={show} onHide={handleClose}>
                        <DinoModel
                        show ={show}
                        handleClose={handleClose}
                        name={dino.name}
                        source={dino._id}/>
                        <SelectedDino selectedDino={currentDino} likedDinos={props.likedDinos} setLikedDinos={props.setLikedDinos}/>
                    </Modal>
                </CCardBody>
            </CCard>
        ))}
        </div>
    );
}