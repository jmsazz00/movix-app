import ApiClient from "./ApiClient";

export interface Team {
  idTeam: string;
  strTeam: string;
  strTeamShort: string;
  strSport: string;
  strLeague: string;
  strStadium: string;
  strDescriptionEN: string;
  strWebsite: string;
  strFacebook: string;
  strTwitter: string;
  strInstagram: string;
  strBadge: string;
  strCountry: string;
}

export interface TeamList {
  teams: Team[];
}

class TeamService extends ApiClient<TeamList> {
  getTeam = (id?: number | string) => {
    return this.apiClient
      .get<TeamList>(this.endpoint, { params: { t: id } })
      .then((res) => res.data);
  };
}

export default new TeamService("/searchteams.php");