export interface Video {
	type: number;
	displayed: boolean;
	alg: string;
	extAlg?: any;
	data: VideoData;
}
export interface VideoDataResolutions {
	resolution: number;
	size: number;
}
export interface VideoDataCreator {
	defaultAvatar: boolean;
	province: number;
	authStatus: number;
	followed: boolean;
	avatarUrl: string;
	accountStatus: number;
	gender: number;
	city: number;
	birthday: number;
	userId: number;
	userType: number;
	nickname: string;
	signature: string;
	description: string;
	detailDescription: string;
	avatarImgId: number;
	backgroundImgId: number;
	backgroundUrl: string;
	authority: number;
	mutual: boolean;
	expertTags?: any;
	experts?: any;
	djStatus: number;
	vipType: number;
	remarkName?: any;
	avatarImgIdStr: string;
	backgroundImgIdStr: string;
}
export interface VideoDataUrlInfo {
	id: string;
	url: string;
	size: number;
	validityTime: number;
	needPay: boolean;
	payInfo?: any;
	r: number;
}
export interface VideoDataVideoGroup {
	id: number;
	name: string;
	alg?: any;
}
export interface VideoDataRelateSongAr {
	id: number;
	name: string;
	tns: any[];
	alias: any[];
}
export interface VideoDataRelateSongAl {
	id: number;
	name: string;
	picUrl: string;
	tns: any[];
	pic: number;
}
export interface VideoDataRelateSongH {
	br: number;
	fid: number;
	size: number;
	vd: number;
}
export interface VideoDataRelateSongM {
	br: number;
	fid: number;
	size: number;
	vd: number;
}
export interface VideoDataRelateSongL {
	br: number;
	fid: number;
	size: number;
	vd: number;
}
export interface VideoDataRelateSongPrivilege {
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
}
export interface VideoDataRelateSong {
	name: string;
	id: number;
	pst: number;
	t: number;
	ar: VideoDataRelateSongAr[];
	alia: any[];
	pop: number;
	st: number;
	rt: string;
	fee: number;
	v: number;
	crbt?: any;
	cf: string;
	al: VideoDataRelateSongAl;
	dt: number;
	h: VideoDataRelateSongH;
	m: VideoDataRelateSongM;
	l: VideoDataRelateSongL;
	a?: any;
	cd: string;
	no: number;
	rtUrl?: any;
	ftype: number;
	rtUrls: any[];
	djId: number;
	copyright: number;
	s_id: number;
	rtype: number;
	rurl?: any;
	mst: number;
	cp: number;
	mv: number;
	publishTime: number;
	privilege: VideoDataRelateSongPrivilege;
}
export interface VideoData {
	alg: string;
	scm: string;
	threadId: string;
	coverUrl: string;
	height: number;
	width: number;
	title: string;
	description?: any;
	commentCount: number;
	shareCount: number;
	resolutions: VideoDataResolutions[];
	creator: VideoDataCreator;
	urlInfo: VideoDataUrlInfo;
	videoGroup: VideoDataVideoGroup[];
	previewUrl?: any;
	previewDurationms: number;
	hasRelatedGameAd: boolean;
	markTypes: number[];
	relateSong: VideoDataRelateSong[];
	relatedInfo?: any;
	videoUserLiveInfo?: any;
	vid: string;
	durationms: number;
	playTime: number;
	praisedCount: number;
	praised: boolean;
	subscribed: boolean;
}

export interface PersonalizedPrivateContent {
	id: number;
	url: string;
	picUrl: string;
	sPicUrl: string;
	type: number;
	copywriter: string;
	name: string;
	time: number;
}

export interface VideoGroup {
	id: number;
	name: string;
	url?: any;
	relatedVideoType?: any;
	selectTab: boolean;
	abExtInfo?: any;
}
