import React from 'react';
import {CharacterProfileProps} from "../interfaces/interface";


const CharacterProfile: React.FC<CharacterProfileProps> = ({ character }) => {
    return (
        <div>
            <h2>{character.name}</h2>
            <p>{character.description}</p>
        </div>
    );
};

export default CharacterProfile;
