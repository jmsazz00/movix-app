import { create } from "zustand";
import SortOption from "../entities/SortOption";

interface TeamQuery {
  countryName?: string;
  sortBy: SortOption;
}

interface TeamQueryStore {
  teamQuery: TeamQuery;
  setCountryName: (name?: string) => void;
  setSortBy: (sortBy: SortOption) => void;
}

const useTeamQueryStore = create<TeamQueryStore>()((set) => ({
  teamQuery: { sortBy: "name_asc" },
  setCountryName: (name?: string) =>
    set(() => ({ teamQuery: { countryName: name, sortBy: "name_asc" } })),

  setSortBy: (sortBy: SortOption) =>
    set((store) => ({ teamQuery: { ...store.teamQuery, sortBy } })),
}));

export default useTeamQueryStore;
