import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "../../config/api_key";
import { CastList, Container, CastItem } from "./components";
import React from "react";

export default function Cast(){

    const [casts, setCast] = useState<any[]>([])
    const { id } = useParams()    

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=pt-BR`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setCast(data['cast'])
        })
    }, [])

    return (
        <Container>
            <h1>Cast</h1>            
            <CastList>
                {
                    casts.map(castItem => {
                        console.log(castItem);
                        return(
                            <CastItem>
                                <a href="#"><img src={`https://image.tmdb.org/t/p/w500/${castItem.profile_path}`} alt={castItem.name}/></a>
                                <span>{castItem.name}</span>
                            </CastItem>            
                        )
                    })
                }
            </CastList>
        </Container>        
    );
}