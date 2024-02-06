export interface RootState {
    marvel: {
        characters: any[];
        status: 'idle' | 'loading' | 'succeeded' | 'failed';
        error: string | null;
    };
}

export interface MarvelState {
    characters: Character[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

export interface Character {
    id: number;
    name: string;
    description: string;
}

export interface CharacterTableProps {
    characters: Array<any>;
}


export interface CharacterProfileProps {
    character: any;
}

export interface FilterComponentProps {
    onFilterChange: (value: boolean) => void;
}

export interface ChartComponentProps {
    characters: Array<any>;
}