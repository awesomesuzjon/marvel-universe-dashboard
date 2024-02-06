import React from 'react';
import {FilterComponentProps} from "../interfaces/interface";

const FilterComponent: React.FC<FilterComponentProps> = ({ onFilterChange }) => {
    return (
        <div>
            <label>
                Show Characters in Chart:
                <input
                    type="checkbox"
                    onChange={(e) => onFilterChange(e.target.checked)}
                />
            </label>
        </div>
    );
};

export default FilterComponent;
