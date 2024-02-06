import React from 'react';
import { Bar } from 'react-chartjs-2';
import {ChartComponentProps} from "../interfaces/interface";


const ChartComponent: React.FC<ChartComponentProps> = ({ characters }) => {
    const data = {
        labels: characters.map((character) => character.name),
        datasets: [
            {
                label: 'Number of Comics',
                data: characters.map((character) => character.comics.available),
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div>
            <h2>Character Comics Chart</h2>
            <Bar data={data} />
        </div>
    );
};

export default ChartComponent;
