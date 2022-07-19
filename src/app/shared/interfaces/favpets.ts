import { P } from "./pets";

export interface IFav{
  petId:number;
}

export interface IFavs{
  $values:IFav[];
}

export interface IFavpets{
  $values:P[];
}