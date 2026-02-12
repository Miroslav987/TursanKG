
// import { StateCreator } from 'zustand'

// import { fetcGazoblokType, fetchAdvantage, fetchMiniAdvantage, fetchOpeningMain } from '@entities/main/api/mainApi'

// import { ContentMainType } from '../types'

// export interface MainSlice {
//   gazoblokType: ContentMainType | null
//   miniAdvantage: ContentMainType | null
//   advantage: ContentMainType | null
//   openingMain: ContentMainType | null
//   loading: boolean
//   error: string | null
//   loadContentMain: () => Promise<void>
// }

// export const mainSlice: StateCreator<MainSlice> = (set) => ({
//   gazoblokType: null,
//   miniAdvantage: null,
//   openingMain: null,
//   advantage: null,
//   loading: false,
//   error: null,

//   loadContentMain: async (): Promise<void> => {
//     try {
//       set({ loading: true, error: null })
//       const gazoblokType = await fetcGazoblokType()
//       const miniAdvantage = await fetchMiniAdvantage()
//       const advantage = await fetchAdvantage()
//       const openingMain = await fetchOpeningMain()
//       set({ gazoblokType, miniAdvantage, advantage, openingMain })
//       set({ loading: false, error: null })
//     } catch (err: any) {
//       set({ loading: false, error: err.message || 'Failed to load dossier' })
//     }
//   },
// })
