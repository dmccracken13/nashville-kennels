import React, { useState, useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import Animal from "./Animal"
import "./Animal.css"

export const AnimalList = ({ history }) => {
    const { getAnimals, animals } = useContext(AnimalContext)

    // Initialization effect hook -> Go get animal data
    useEffect(()=>{
        getAnimals()
    }, [])

    return (
        <>
            <h1>Animals</h1>

            <button onClick={() => history.push("/animals/create")}>
                Make Reservation
            </button>
            <div className="animals">
                {
                    animals.map(animal => {
                        return <Animal key={animal.id} animal={animal} />
                    })
                }
            </div>
        </>
    )
}