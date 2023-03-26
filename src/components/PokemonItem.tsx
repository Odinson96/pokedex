import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { IPokemon } from "../interfaces/IPokemon";
import { IPokemonPers } from "../interfaces/IPokemonPers";
import "./css/pokemonItem.css";

interface PokemonList {
  poke: IPokemon;
  i: number;
}

export const PokemonItem: FC<PokemonList> = ({ poke, i }) => {
  const history = useNavigate();
  const [pers, setPers] = useState<IPokemonPers>();
  const fetchPersPoke = async () => {
    axios.get(`${poke.url}`).then(function (response) {
      setPers(response.data);
    });
  };

  useEffect(() => {
    fetchPersPoke();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [poke.url]);

  return (
    <div
      className="all_poke_container"
      onClick={() => history(`/pokemon/${poke.name}`)}
    >
      <div className="poke_descrip">
        <h5 className="poke_name">{poke.name.toUpperCase()}</h5>
        <img
          className="poke_avatar"
          src={pers?.sprites?.front_default}
          alt={poke.name}
        />
        <h3>
          Type:
          {pers?.types?.map((type, i) => (
            <div key={i} className="grid_type_item">
              <div>
                <p className={type.type.name}>
                  {" "}
                  {i + 1}. {type.type.name}
                </p>
              </div>
            </div>
          ))}
        </h3>
        <div className="type_poke_item"></div>
      </div>
    </div>
  );
};
