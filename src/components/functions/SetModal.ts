import { IPokemon } from "../../interfaces/IPokemon";

export const SetModal = (pokemons: IPokemon[]) => {
  let setModal: boolean[] = [];
  setModal.length = pokemons.length;
  setModal.fill(false);
  return setModal;
};
