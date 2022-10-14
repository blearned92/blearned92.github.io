import axios from "axios";
import { useEffect, useState } from "react";
import "./POKEApi.css"

interface IPokeURL {
        name:string
        url:string
    }
interface IPokeURLArray{
        next?: string | null;
        previous?: string | null;
        results:IPokeURL[]
    }
interface IPokemon {
    id:number,
    name:string,
    stats:{
        base_stat:number,
        stat:{
            name:string
        }
    }[]
    types:{
        type:{
            name:string,
            url:string
        }
    }[]
    sprites?:{
        front_default:string,
        front_shiny:string
    }
}   



const POKEApi = () => {
    const [offset, setOffSet] = useState<number>(0);
    const [limit, setLimit] = useState<number>(151);
    const[pokemonArray, setPokemonArray] = useState<IPokemon[]>([]);
    // const[urlList, setURLList] = useState<string[]>([]);
    const[pokemon, setPokemon] = useState<IPokemon>();
    useEffect(()=>{
        getPoke();
    },[])

    useEffect(()=>{
        getPoke();
    },[limit, offset])

    async function getPokemonList():Promise<IPokeURLArray>{
        const response = await axios.get<IPokeURLArray>(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
        return response.data;
    }

    async function getPokemon(url:string):Promise<IPokemon>{
        const firstPokemon = await axios.get<IPokemon>(url);
        return firstPokemon.data;
    }

    async function getPoke(){
        try{
            let list:IPokemon[] = [];
            const pokeList = await getPokemonList();
            // const firstPokemon = await getPokemon(pokeList.results[0].url)
            for(const listItem of pokeList.results){
                const pokemon = await getPokemon(listItem.url);
                // list.push(pokemon)
                console.log(pokemon.name)
                list.push(pokemon)
            }
            setPokemonArray(array => list)

            // setPokemon(pokemon => firstPokemon)
            // console.log(firstPokemon);
        } catch (e){
            console.error(e);
        }
    };     
    
    function checkType2(pokemon:IPokemon):string{
        if(pokemon.types.length===2){
            return "/" + pokemon.types[1].type.name
        } else {
            return ""
        }
    }

    function setGen1(){
        setLimit(limit=>151);
        setOffSet(offset=>0);
        console.log("gen1 clicked")
    }

    function setGen2(){
        setLimit(limit=>100);
        setOffSet(offset=>151);
        console.log("gen2 clicked")
    }

    function setGen3(){
        setLimit(limit=>135);
        setOffSet(offset=>251);
        console.log("gen2 clicked")
    }

    function setGen4(){
        setLimit(limit=>108);
        setOffSet(offset=>386);
        console.log("gen2 clicked")
    }

    function setGen5(){
        setLimit(limit=>155);
        setOffSet(offset=>494);
        console.log("gen2 clicked")
    }

    function setGen6(){
        setLimit(limit=>72);
        setOffSet(offset=>649);
        console.log("gen2 clicked")
    }

    function setGen7(){
        setLimit(limit=>88);
        setOffSet(offset=>721);
        console.log("gen2 clicked")
    }

    function setGen8(){
        setLimit(limit=>96);
        setOffSet(offset=>809);
        console.log("gen2 clicked")
    }

    return <div className="main">
        <input type="button" value="Gen 1" name="gen" onClick={setGen1}></input>
        <input type="button" value="Gen 2" name="gen" onClick={setGen2}></input>
        <input type="button" value="Gen 3" name="gen" onClick={setGen3}></input>
        <input type="button" value="Gen 4" name="gen" onClick={setGen4}></input>
        <input type="button" value="Gen 5" name="gen" onClick={setGen5}></input>
        <input type="button" value="Gen 6" name="gen" onClick={setGen6}></input>
        <input type="button" value="Gen 7" name="gen" onClick={setGen7}></input>
        <input type="button" value="Gen 8" name="gen" onClick={setGen8}></input>


        <div className="list-grid">
            {
                pokemonArray.map((pokemon)=>{
                    return <div className={"container"} >
                        <div className={"background " + pokemon.types[0].type.name}>
                            <div className="head">
                                <table>
                                    <tr>
                                        <td className="name">{pokemon.name.toUpperCase()}</td>
                                        <td className="hp">{pokemon.stats[0].stat.name.toUpperCase()}: {pokemon.stats[0].base_stat}</td>
                                        <td className="logo"><img src={require("../../../images/logos/"+ pokemon.types[0].type.name +".png")}/></td>
                                    </tr>
                                </table>
                            </div>
                            <div className="body">
                                <img src={pokemon.sprites?.front_default} className="img"/>
                            </div>
                            <div className="info">
                                <table>
                                    <tr>
                                        <td className="stat">{pokemon.stats[1].stat.name.toUpperCase()}</td>
                                        <td className="value">{pokemon.stats[1].base_stat}</td>
                                    </tr>
                                    <tr>
                                        <td className="stat">{pokemon.stats[2].stat.name.toUpperCase()}</td>
                                        <td className="value">{pokemon.stats[2].base_stat}</td>
                                    </tr>
                                    <tr>
                                        <td className="stat">{pokemon.stats[3].stat.name.toUpperCase()}</td>
                                        <td className="value">{pokemon.stats[3].base_stat}</td>
                                    </tr>
                                    <tr>
                                        <td className="stat">{pokemon.stats[4].stat.name.toUpperCase()}</td>
                                        <td className="value">{pokemon.stats[4].base_stat}</td>
                                    </tr>
                                    <tr>
                                        <td className="stat">{pokemon.stats[5].stat.name.toUpperCase()}</td>
                                        <td className="value">{pokemon.stats[5].base_stat}</td>
                                    </tr>
                                </table>
                            </div>
                            <div className="footer">Dex# {pokemon.id}</div>
                        </div>
            
                    </div>
                })
            }
        </div>
    </div>
}

export default POKEApi;