import React from 'react';
import './CharactersList.css';
import Api from '../../API';

export default class CharactersList extends React.Component {

    rickMortyApi = new Api();
    
    componentDidMount() {
        const charactersArr = this.rickMortyApi.getAllCharacters()
            .then((data) => console.log(data));
        console.log(charactersArr);
        
    }
    
    render() {
        return (
            <div className="CharactersList">
                <h1>Characters</h1>
                <ul>
                    
                </ul>
            </div>
        );
    }

    /*const items = arr.map((el) => {
        return(
            <li></li>
        );
    })*/


}