export interface Jersey {
  idEquipment: string;
  idTeam: string;
  strSeason: string;
  strEquipment: string;
  strType: string;
}

export interface JerseyList {
  equipment: Jersey[];
}
