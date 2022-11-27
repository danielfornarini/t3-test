import React, {useState} from "react";

interface Props {
    onAdd: (arg: string) => void;
}

const EpisodeAdd: React.FC<Props> = ({ onAdd }) => {
    const [value, setValue] = useState('');

    return (
        <>
            <div className="flex">
                <input className="bg-gray-100 rounded border border-gray-300 px-4 py-3 w-[700px] mr-3" value={value} onChange={(e) => setValue(e.target.value)} type="text"/>
                <button onClick={() => onAdd(value)} className="rounded px-4 py-3 bg-blue-500 text-white">Aggiungi</button>
            </div>
        </>
    );
};

export default EpisodeAdd;