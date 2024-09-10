export interface Jersey {
  idEquipment: string;
  idTeam: string;
  date: string;
  strSeason: string;
  strEquipment: string;
  strType: string;
  strUsername: string;
}

export interface JerseyList {
  equipment: Jersey[];
}
