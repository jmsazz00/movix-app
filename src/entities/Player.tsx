export interface Player {
  idPlayer: string;
  idTeam: string;
  strNationality: string;
  strPlayer: string;
  strTeam: string;
  strSport: string;
  dateBorn: string;
  strNumber: string;
  dateSigned: string;
  strSigning: string;
  strWage: string;
  strStatus: string;
  strDescriptionEN: string;
  strPosition: string;
  strFacebook: string;
  strTwitter: string;
  strInstagram: string;
  strHeight: string;
  strWeight: string;
  strThumb: string;
  strCutout: string;
  strFanart1: string;
  strFanart2: string;
  strFanart3: string;
  strFanart4: string;
}

export interface PlayerInfo {
  player: Player[];
}
