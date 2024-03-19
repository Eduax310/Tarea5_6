type Ability = {
    name: string;
    url: string;
    is_hidden: boolean;
    slot: number;
  };
  
  type Sprites = {
    front_default: string;
  };
  
  type Location = {
    name: string;
    url: string;
  };
  
  type AbilityDetail = {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  };
  
  type Pokemon = {
    id: number, 
    name: string;
    types: { type: { name: string } }[]; 
    weight: number; 
    height: number; 
    abilities: AbilityDetail[];
    sprites: Sprites;
    location: Location[]; 
  };
  type Type = {
    slot: number;
    type: {
      name: string; 
    };
  };
  
  export default Pokemon;