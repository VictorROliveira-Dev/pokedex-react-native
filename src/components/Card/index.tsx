import React from "react";
import dotsImage from "../../assets/img/dots.png";
import pokeballImage from "../../assets/img/pokeballCard.png";

import * as S from "./styles";
import { TouchableOpacity } from "react-native";

export type PokemonType = {
  type: {
    name: string;
  };
};

export type Pokemon = {
  name: string;
  url: string;
  id: number;
  types: PokemonType[];
};

type Props = {
  data: Pokemon;
} & TouchableOpacity;

export function Card({ data, ...rest }: Props) {
  return (
    <S.PokemonCard type={data.types[0].type.name} {...rest}>
      <S.LeftSide>
        <S.PokemonId>#{data.id}</S.PokemonId>
        <S.PokemonName>{data.name}</S.PokemonName>
        <S.ImageCardDetailLeftSide
          source={dotsImage}
        ></S.ImageCardDetailLeftSide>

        <S.PokemonContentType>
          {data.types.map((pokeType) => (
            <S.PokemonType type={pokeType.type.name}>
              <S.PokemonTypeText key={pokeType.type.name}>
                {pokeType.type.name}
              </S.PokemonTypeText>
            </S.PokemonType>
          ))}
        </S.PokemonContentType>
      </S.LeftSide>

      <S.RightSide>
        <S.PokeballDetail source={pokeballImage}/>
        <S.PokemonImage 
        source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
        }}
        />
      </S.RightSide>
    </S.PokemonCard>
  );
}
