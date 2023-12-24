import React from "react";


const Modal = ({ is, handle, stats }) => {

    if (!is) { return null }
    //const PokemonDetail = useSelector((state)=> state.card.items[id-1]);
    //console.log("stats is", PokemonDetail.stats);
    const pokemonData = stats.reduce((accu, current) => {
        accu[current.stat.name] = current.base_stat;
        return accu;
    }, {})

    console.log("stats from Modal componenet", pokemonData);



    return (
        <div className="outerDivOfModal" onClick={() => handle(false)}>
            <div className="innerDiv p-5" onClick={(e) => e.stopPropagation()}>

                <div className="row mb-2">
                    <div className="col ">
                        Speed
                    </div>
                    <div className="col">
                        <span>{pokemonData.speed}</span>
                    </div>
                    <div className="col">
                        <div className="uperDivProgressBar">
                            <div className="innerDivProgressBar" style={{ width: `${(pokemonData.speed / 200) * 100}%`, backgroundColor: "yellow" }} >

                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mb-2">
                    <div className="col">
                        Special Defence
                    </div>
                    <div className="col">
                        <span>{pokemonData["special-defense"]}</span>
                    </div>
                    <div className="col">
                        <div className="uperDivProgressBar">
                            <div className="innerDivProgressBar" style={{ width: `${(pokemonData["special-defense"] / 200) * 100}%`, backgroundColor: "orange" }}>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mb-2">
                    <div className="col">
                        Special Attack
                    </div>
                    <div className="col">
                        <span>{pokemonData["special-attack"]}</span>
                    </div>
                    <div className="col">
                        <div className="uperDivProgressBar">
                            <div className="innerDivProgressBar" style={{ width: `${(pokemonData["special-attack"] / 200) * 100}%`, backgroundColor: "green"}}>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mb-2">
                    <div className="col">
                        Defense
                    </div>
                    <div className="col">
                        <span>{pokemonData.defense}</span>
                    </div>
                    <div className="col">
                        <div className="uperDivProgressBar">
                            <div className="innerDivProgressBar" style={{ width: `${(pokemonData.defense / 200) * 100}%`, backgroundColor: "orange"}}>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mb-2">
                    <div className="col">
                        Attack
                    </div>
                    <div className="col">
                        <span>{pokemonData.attack}</span>
                    </div>
                    <div className="col">
                        <div className="uperDivProgressBar">
                            <div className="innerDivProgressBar" style={{ width: `${(pokemonData.attack / 200) * 100}%`, backgroundColor: "yellow"}}>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mb-2">
                    <div className="col">
                        Hp
                    </div>
                    <div className="col">
                        <span>{pokemonData.hp}</span>
                    </div>
                    <div className="col">
                        <div className="uperDivProgressBar">
                            <div className="innerDivProgressBar" style={{ width: `${(pokemonData.hp / 200) * 100}%`, backgroundColor: "green" }}>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Modal;