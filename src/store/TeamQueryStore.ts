import { create } from "zustand";
import SortOption from "../entities/SortType";

interface TeamQuery {
  sortBy: SortOption;
}

interface TeamQueryStore {
  teamQuery: TeamQuery;
  setSortBy: (sortBy: SortOption) => void;
}

const useTeamQueryStore = create<TeamQueryStore>()((set) => ({
  teamQuery: { sortBy: "name_asc" },
  setSortBy: (sortBy: SortOption) =>
    set((store) => ({ teamQuery: { ...store.teamQuery, sortBy } })),
}));

export default useTeamQueryStore;
