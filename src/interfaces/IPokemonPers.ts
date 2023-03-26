export interface IPokemonPers {
  sprites: {
    front_default: string;
    back_default: string;
    back_shiny: string;
  };
  base_experience: number;
  types: [
    {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    },
    {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    }
  ];
  weight: number;
}
