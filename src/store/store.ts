import { create } from "zustand";
// type IPage = "index" | "account" | "explore";
type BearsState = {
  bears: number;
  hydrated: boolean;
  token: string;
  username: string;
  isAuthenticated: boolean;
  setToken: (token: string) => void;
  //   increasePopulation: () => void;
  //   removeAllBears: () => void;
  //   page: IPage;
  //   setActivePage: (page: IPage) => void;
  //   username: string;
  //   setUserName: (username: string) => void;
  //   product: string;
  //   setProduct: () => Promise<void>;
};

const useStore = create<BearsState>((set) => ({
  bears: 0,
  hydrated: false,
  username: "",
  token: "",
  isAuthenticated: false,
  setIsAuthenticated: (isAuthenticated: boolean) => set({ isAuthenticated }),
  setToken: (token: string) => set({ token }),
  //   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  //   removeAllBears: () => set({ bears: 0 }),
  //   page: "index",
  //   setActivePage: (page) => set({ page: page }),
  //   setUserName: (username) => set({ username: username }),
  //   product: "",
  //   setProduct: async () => {
  //     const res = await fetch("https://dummyjson.com/products/1");
  //     const data = await res.json();
  //     set({ product: data.title ?? "no title" });
  //     set({ hydrated: true });
  //   },
}));

export default useStore;
