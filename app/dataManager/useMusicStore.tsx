
// stores/musicLibraryStore.ts
import { create } from 'zustand';
import { combine } from 'zustand/middleware';
import type { Album, Artist, SongDetails, MusicListSectionProps } from "../appData/models";



// export const useMusicLibraryStore = create(
//   combine(
//     {
//       musicSections: [] as MusicListSectionProps[],
//       newReleases: [] as Album[],
//       recentlyPlayed: [] as SongDetails[],
//       artists: [] as Artist[],
//       labels: [] as Artist[],
//     },
//     (set) => ({
//       setMusicSections: (sections: MusicListSectionProps[]) =>
//         set({ musicSections: sections }),

//       setNewReleases: (albums: Album[]) =>
//         set({ newReleases: albums }),

//       setRecentlyPlayed: (songs: SongDetails[]) =>
//         set({ recentlyPlayed: songs }),

//       setArtists: (artists: Artist[]) =>
//         set({ artists }),

//       setLabels: (labels: Artist[]) =>
//         set({ labels }),
//     })
//   )
// );



// stores/musicLibraryStore.ts

export const useMusicLibraryStore = create(
  combine(
    {
      musicSections: [] as MusicListSectionProps[],
      newReleases: [] as Album[],
      recentlyPlayed: [] as SongDetails[],
      artists: [] as Artist[],
      labels: [] as Artist[],
    },
    (set) => ({
      setData: (data: {
        musicSections: MusicListSectionProps[];
        newReleases: Album[];
        recentlyPlayed: SongDetails[];
        artists: Artist[];
        labels: Artist[];
      }) => set(data),

      loadFromJson: async (url: string) => {
        try {
          const res = await fetch(url);
          if (!res.ok) throw new Error('Failed to load JSON');
          const data = await res.json();
          set(data);
        } catch (err) {
          console.error('Error loading music library:', err);
        }
      },
    })
  )
);
