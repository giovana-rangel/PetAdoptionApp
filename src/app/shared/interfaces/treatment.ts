export interface ITreatment {
  id:number;
  treatmentLabel:string;
  aplicationDate:string;
  petIdFk:number;
}

export interface ITreatments{
  $values:ITreatment[];
}
