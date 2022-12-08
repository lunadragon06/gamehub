import { API } from "../../constants/api";
import axios from "axios";
import Categories from "../games/Categories";
import ErrorMessage from "../../common/ErrorMessage";
import GameItem from "./GameItem";
import Heading from "../layout/Heading";
import Loader from "../layout/Loader";
import {useState, useEffect} from "react";

const url = API;

function GameList() { 
    const [games, setGame] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(function () {
		async function fetchDatas() {
			try {
                const response = await axios.get(url);
                if (response.status === 200) {
                    setGame(response.data);
                } else {
                    setError("A server error occured! Failed to upload games.");
					console.log(setError);
                }
            } catch (error) {
                setError(error.toString());
                console.log(error);
            } finally {
                setLoading(false);
            }
		}
		fetchDatas();
	}, []);

	if (loading) {
		return <Loader />;
	}

	if (error) {
		return <ErrorMessage message={`Error: ${error}`} />;
	}


	return (
		<>
		    <Heading content="Game List" />
			<Categories />
		    <section className="games">
			    {games.map(function (game) {
				    const { id, name, images, prices } = game;
				    return <GameItem key={id} id={id} name={name} images={images} prices={prices} />;
			    })}
		    </section>
		</>
    );
}

export default GameList; 
