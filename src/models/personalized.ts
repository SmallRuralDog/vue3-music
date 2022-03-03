export interface Personalized {
    id: number;
    type: number;
    name: string;
    copywriter: string;
    picUrl: string;
    canDislike: boolean;
    trackNumberUpdateTime: number;
    playCount: number;
    trackCount: number;
    highQuality: boolean;
    alg: string;
}


export interface PersonalizedNewSong {
    id: number;
    type: number;
    name: string;
    picUrl: string;
    canDislike: boolean;
    song: PNSSong;
    alg: string;
}

export interface PNSSongArtists {
    name: string;
    id: number;
    picId: number;
    img1v1Id: number;
    briefDesc: string;
    picUrl: string;
    img1v1Url: string;
    albumSize: number;
    alias: any[];
    trans: string;
    musicSize: number;
    topicPerson: number;
}

export interface PNSSongAlbumArtist {
    name: string;
    id: number;
    picId: number;
    img1v1Id: number;
    briefDesc: string;
    picUrl: string;
    img1v1Url: string;
    albumSize: number;
    alias: any[];
    trans: string;
    musicSize: number;
    topicPerson: number;
}

export interface PNSSongAlbumArtists {
    name: string;
    id: number;
    picId: number;
    img1v1Id: number;
    briefDesc: string;
    picUrl: string;
    img1v1Url: string;
    albumSize: number;
    alias: any[];
    trans: string;
    musicSize: number;
    topicPerson: number;
}

export interface PNSSongAlbum {
    name: string;
    id: number;
    type: string;
    size: number;
    picId: number;
    blurPicUrl: string;
    companyId: number;
    pic: number;
    picUrl: string;
    publishTime: number;
    description: string;
    tags: string;
    company: string;
    briefDesc: string;
    artist: PNSSongAlbumArtist;
    songs: any[];
    alias: any[];
    status: number;
    copyrightId: number;
    commentThreadId: string;
    artists: PNSSongAlbumArtists[];
    subType: string;
    onSale: boolean;
    mark: number;
    picId_str: string;
}

export interface PNSSongBMusic {
    id: number;
    size: number;
    extension: string;
    sr: number;
    dfsId: number;
    bitrate: number;
    playTime: number;
    volumeDelta: number;
}

export interface PNSSongHMusic {
    id: number;
    size: number;
    extension: string;
    sr: number;
    dfsId: number;
    bitrate: number;
    playTime: number;
    volumeDelta: number;
}

export interface PNSSongMMusic {
    id: number;
    size: number;
    extension: string;
    sr: number;
    dfsId: number;
    bitrate: number;
    playTime: number;
    volumeDelta: number;
}

export interface PNSSongLMusic {
    id: number;
    size: number;
    extension: string;
    sr: number;
    dfsId: number;
    bitrate: number;
    playTime: number;
    volumeDelta: number;
}

export interface PNSSongPrivilegeFreeTrialPrivilege {
    resConsumable: boolean;
    userConsumable: boolean;
}

export interface PNSSongPrivilegeChargeInfoList {
    rate: number;
    chargeType: number;
}

export interface PNSSongPrivilege {
    id: number;
    fee: number;
    payed: number;
    st: number;
    pl: number;
    dl: number;
    sp: number;
    cp: number;
    subp: number;
    cs: boolean;
    maxbr: number;
    fl: number;
    toast: boolean;
    flag: number;
    preSell: boolean;
    playMaxbr: number;
    downloadMaxbr: number;
    freeTrialPrivilege: PNSSongPrivilegeFreeTrialPrivilege;
    chargeInfoList: PNSSongPrivilegeChargeInfoList[];
}

export interface PNSSong {
    name: string;
    id: number;
    position: number;
    alias: any[];
    status: number;
    fee: number;
    copyrightId: number;
    disc: string;
    no: number;
    artists: PNSSongArtists[];
    album: PNSSongAlbum;
    starred: boolean;
    popularity: number;
    score: number;
    starredNum: number;
    duration: number;
    playedNum: number;
    dayPlays: number;
    hearTime: number;
    ringtone: string;
    copyFrom: string;
    commentThreadId: string;
    ftype: number;
    rtUrls: any[];
    copyright: number;
    mark: number;
    originCoverType: number;
    single: number;
    mvid: number;
    bMusic: PNSSongBMusic;
    rtype: number;
    hMusic: PNSSongHMusic;
    mMusic: PNSSongMMusic;
    lMusic: PNSSongLMusic;
    exclusive: boolean;
    privilege: PNSSongPrivilege;
}

export interface PersonalizedMv {
    id: number;
    type: number;
    name: string;
    copywriter: string;
    picUrl: string;
    canDislike: boolean;
    trackNumberUpdateTime?: any;
    duration: number;
    playCount: number;
    subed: boolean;
    artists: {
        id: number;
        name: string;
    }[];
    artistName: string;
    artistId: number;
    alg: string;
}
export interface DjProgram {
	id: number;
	type: number;
	name: string;
	copywriter: string;
	picUrl: string;
	canDislike: boolean;
	trackNumberUpdateTime?: any;
}
