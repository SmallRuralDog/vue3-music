export interface PlayListHot {
    playlistTag: PlayListHotPlaylistTag;
    activity: boolean;
    position: number;
    category: number;
    hot: boolean;
    createTime: number;
    usedCount: number;
    name: string;
    id: number;
    type: number;
}

export interface PlayListHotPlaylistTag {
    id: number;
    name: string;
    category: number;
    usedCount: number;
    type: number;
    position: number;
    createTime: number;
    highQuality: number;
    highQualityPos: number;
    officialPos: number;
}
