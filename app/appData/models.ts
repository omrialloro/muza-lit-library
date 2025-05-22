export interface SongDetails {
  index?: number;
  title: string;
  time?: number;
  imageSrc?: string;
  artist?: string;
  audioUrl?: string;
  album?: string;
  year?: number;
  id?: string;
  isPlaying?: boolean;
}


export interface Album {
  id: string;
  imageSrc: string;
  title: string;
  subTitle: string;
  artist: string;
  songs?: number[];
}

export interface Artist {
  id: string;
  name: string;
  imageUrl: string;
}

interface MusicListItem {
  imageSrc: string;
  title: string;
  subTitle?: string;
  artistName?: string;
  songsCount?: number;
  albumsCount?: number;
}

export type MusicListSectionProps = {
  title: string;
  subTitle?: string;
  type: "album" | "artist" | "playlist";
  list: MusicListItem[];
  onShowAll?: (sectionTitle: string) => void;
};
