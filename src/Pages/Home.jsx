import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import {Button, Container} from "react-bootstrap";

function Home() {
    const [pokemonData, setPokemonData] = useState([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                setPokemonData(data.results);
            })
            .catch(error => {
                console.error("Error fetching Pokemon data:", error);
            });
    }, []); // Empty dependency array to run only once

    return (
        <Container className="buscador" >
            <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Buscador de pokemon" control-id="ControlID-47"/>
            <datalist id="datalistOptions">
                {pokemonData.map(pokemon => (
                    <option key={pokemon.name} value={pokemon.name}>
                    </option>
                ))}
            </datalist>
            <Button className="m-3">
                Ver
            </Button>
        </Container>
    );
}

export default Home;
