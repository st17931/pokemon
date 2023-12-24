import React,{ useState } from "react";
import Modal
 from "./Modal";
import Type from "./Type";
const Card = (prop) => {
    const [show, setShow] = useState(false);
    const handleShow = (a)=>{
        setShow(a);
    }
    
    
    const arr = ["bg-info", "bg-warning", "bg-danger"]
    const randomNo = Math.floor(Math.random() * arr.length);

    //console.log("prop stat in the card component", prop.stats);

    return (
        <>
        <div className="col-12 col-lg-3 col-md-6 mb-2" onClick={()=> setShow(true)}>
            <div className={`card ${arr[randomNo]}  bg-opacity-75 rounded-5 mx-2 h-100  `}  >
                <div className={`row text-light `}>
                    <div className="col-6">
                        <h5>{prop.name}</h5>
                        <div>
                            {prop.type.map((oneValue) => (<Type name={oneValue.type.name} />))}
                        </div>
                    </div>
                    <div className="col-6">
                        <p className="fs-1 fw-bold opacity-25 ">{prop.id}</p>
                        <img className="h-75 w-75 img-fluid" src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${prop.id}.svg`} />
                    </div>

                </div>
            </div>
        </div>
        <Modal is={show} handle={handleShow} stats={prop.stats}/>
        </>
    )
}

export default Card;