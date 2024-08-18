export default interface Result {
  idEvent: number;
  strEvent: string;
  strFilename: string;
  idLeague: string;
  strLeague: string;
  strHomeTeam: string;
  strAwayTeam: string;
  intHomeScore: string;
  intAwayScore: string;
  dateEvent: string;
  strHomeTeamBadge: string;
  strAwayTeamBadge: string;
}

export interface ResultList {
  results: Result[];
}
