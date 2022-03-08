import {defineStore, storeToRefs} from "pinia";
import {useDetail, useSongUrl} from "@/utils/api";
import {onMounted, onUnmounted, toRefs, watch} from "vue";
import type {Song} from "@/models/song";
import type {SongUrl} from "@/models/song_url";

const KEYS = {
    volume: 'PLAYER-VOLUME'
}

export const usePlayerStore = defineStore({
    id: "player",
    state: () => ({
        audio: new Audio(),
        loopType: 0,//循环模式 0 单曲循环 1 列表循环 2随机播放
        volume: localStorage.getItem(KEYS.volume)?.toInt() || 60,//音量
        playList: [],//播放列表
        id: 0,
        url: '',
        songUrl: {} as SongUrl,
        song: {} as Song,
        isPlaying: false, //是否播放中
        isPause: false,//是否暂停
        sliderInput: false,//是否正在拖动进度条
        ended: false,//是否播放结束
        muted: false,//是否静音
        currentTime: 0,//当前播放时间
        duration: 0,//总播放时长
    }),
    actions: {
        init() {
            this.audio.volume = this.volume / 100;
        },
        async play(id: number) {
            if (id == this.id) return;
            this.isPlaying = false
            const data = await useSongUrl(id)
            this.audio.src = data.url;
            this.audio.play().then(res => {
                console.log("play")
                this.isPlaying = true
                this.songUrl = data
                this.url = data.url
                this.id = id;
                this.songDetail()
            }).catch(res => {
                console.log(res)
            })
        },
        //播放结束
        playEnd() {
            console.log('播放结束')
            switch (this.loopType) {
                case 0:
                    this.rePlay()
                    break;
                case 1:
                    break;
                case 2:
                    break;
            }
        },
        async songDetail() {
            this.song = await useDetail(this.id)
        },
        //重新播放
        rePlay() {
            setTimeout(() => {
                this.currentTime = 0;
                this.audio.play()
            }, 1500)
        },
        //下一曲
        next() {
            this.play(1909651843)
        },
        //上一曲
        prev() {
        },
        //播放、暂停
        togglePlay() {
            if (!this.song.id) return;
            this.isPlaying = !this.isPlaying
            if (!this.isPlaying) {
                this.audio.pause();
                this.isPause = true
            } else {
                this.audio.play();
                this.isPause = false
            }
        },
        //切换循环类型
        toggleLoop() {
            if (this.loopType == 2) {
                this.loopType = 0;
            } else {
                this.loopType++;
            }
        },
        //静音切换
        toggleMuted() {
            this.muted = !this.muted
            this.audio.muted = this.muted
        },
        //音量设置
        setVolume(n: number) {
            n = n > 100 ? 100 : n
            n = n < 0 ? 0 : n
            this.volume = n
            this.audio.volume = n / 100
            localStorage.setItem('PLAYER-VOLUME', n.toString())
        },
        //修改播放时间
        onSliderChange(val: number) {
            this.currentTime = val
            this.sliderInput = false;
            this.audio.currentTime = val
        },
        //播放时间拖动中
        onSliderInput(val: number) {
            this.sliderInput = true;
        },
        //定时器
        interval() {
            if (this.isPlaying && !this.sliderInput) {
                this.currentTime = parseInt(this.audio.currentTime.toString());
                this.duration = parseInt(this.audio.duration.toString());
                this.ended = this.audio.ended
            }
        }
    }
})


export const userPlayerInit = () => {
    let timer: NodeJS.Timer;
    const {init, interval, playEnd} = usePlayerStore()

    const {ended} = storeToRefs(usePlayerStore())

    //监听播放结束
    watch(ended, ended => {
        if (!ended) return
        playEnd()
    })

    //启动定时器
    onMounted(() => {
        init()
        console.log('启动定时器')
        timer = setInterval(interval, 1000)
    })
    //清除定时器
    onUnmounted(() => {
        console.log('清除定时器')
        clearInterval(timer)
    })
}
