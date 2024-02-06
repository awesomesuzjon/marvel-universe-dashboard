import React from 'react';
import {CharacterTableProps} from "../interfaces/interface";


const CharacterTable: React.FC<CharacterTableProps> = ({characters}) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 shadow-lg rounded-lg">
                <thead className="bg-marvel-red text-white">
                <tr>
                    <th className="py-3 px-6 border-b">Name</th>
                    <th className="py-3 px-6 border-b">Description</th>
                </tr>
                </thead>
                <tbody>
                {characters.map((character) => (
                    <tr key={character.id} className="border-b">
                        <td className="py-2 px-6">{character.name}</td>
                        <td className="py-2 px-6">{character.description}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default CharacterTable;
