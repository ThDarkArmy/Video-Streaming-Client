import { VideoStreaming } from "../constants";


// get a video
export const getVideo = id => {
    return {
        type: VideoStreaming.GET,
        payload: {
            id: id
        }
    }
}