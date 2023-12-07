// store.js
import create from 'zustand';

const useStore = create((set) => ({
  isDarkTheme: true,
  toggleTheme: () => set((state:any) => ({ isDarkTheme: !state.isDarkTheme })),

}));

export default useStore;
