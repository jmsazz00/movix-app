import { create } from "zustand";
import SortOption from "../entities/SortType";

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
    set((store) => {
      if (store.teamQuery.countryName !== name)
        return { teamQuery: { countryName: name, sortBy: "name_asc" } };
      return store;
    }),
  setSortBy: (sortBy: SortOption) =>
    set((store) => ({ teamQuery: { ...store.teamQuery, sortBy } })),
}));

export default useTeamQueryStore;
