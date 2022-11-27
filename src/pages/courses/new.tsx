import {NextPage} from "next";
import {useState} from "react";
import EpisodeAdd from "../../components/episode-add";
import {trpc} from "../../utils/trpc";

const NewCouse: NextPage = () => {
    const [title, setTitle] = useState<string>('');
    const [episodes, setEpisodes] = useState<string[]>([]);

    const mutation = trpc.courses.create.useMutation({
        onSuccess(e) {
            console.log(e);
        }
    });

    const onNewEpisodeAdd = (value: string) => {
        setEpisodes([...episodes, value]);
    };

    const onSaveClick = () => {
        const course = mutation.mutate({
           title,
           episodes
        });

        setTitle('');
        setEpisodes([]);
    }

    return (
        <>
            <div className="flex flex-col p-10">
                <div className="flex flex-col me-auto mb-4">
                    <p className="mb-2">Title</p>
                    <div className="flex">
                        <input className="bg-gray-100 rounded border border-gray-300 px-4 py-3 w-[200px] mr-3" placeholder="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                        <button onClick={onSaveClick} className="rounded px-4 py-3 bg-blue-500 text-white">Save</button>
                    </div>
                </div>

                <EpisodeAdd onAdd={onNewEpisodeAdd}/>

                {episodes.map((episode, i) => (
                    <div key={i}>{episode}</div>
                ))}
            </div>
        </>
    )
};

export default NewCouse;