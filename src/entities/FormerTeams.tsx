export interface FormerTeam {
  id: string;
  idPlayer: string;
  idFormerTeam: string;
  strPlayer: string;
  strFormerTeam: string;
  strMoveType: "Permanent" | "Loan" | "Youth" | "International";
  strBadge: string;
  strJoined: string;
  strDeparted: string;
}

export interface FormerTeams {
  formerteams: FormerTeam[];
}
