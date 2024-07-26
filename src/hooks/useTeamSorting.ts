import Team from "../entities/Team";
import SortOption from "../entities/SortOption";

export const useTeamSorting = (sortBy: SortOption, teams: Team[]) => {
  if (!teams) return [];

  const sortedTeams = [...teams];

  switch (sortBy) {
    case "name_asc":
      sortedTeams.sort((a, b) => a.strTeam.localeCompare(b.strTeam));
      break;
    case "name_desc":
      sortedTeams.sort((a, b) => b.strTeam.localeCompare(a.strTeam));
      break;
    case "rating":
      sortedTeams.sort((a, b) => b.intLoved - a.intLoved);
      break;
    default:
      break;
  }

  return sortedTeams;
};
