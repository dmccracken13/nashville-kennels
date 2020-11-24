import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { Animal } from "./Animal"
import "./Animal.css"

export const AnimalList = () => {
    // This state changes when `getAnimals()` is invoked below
    const { animals, getAnimals } = useContext(AnimalContext)

    /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
    useEffect(() => {
        console.log("AnimalList: Initial render before data")
        getAnimals()
    }, [])

    /*
        This effect is solely for learning purposes. The effect
        it is responding to is that the animal state changed.
    */
    useEffect(() => {
        console.log("AnimalList: Location state changed")
        console.log(animals)
    }, [animals])

    return (
        <div className="animals">
        {
            animals.map(animl => <Animal key={animl.id} animal={animl} />)
        }
        </div>
    )
}