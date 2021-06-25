import { connect } from "react-redux";
import VideosList from "./VideosList";
import { getAllVideos } from "../actions/videoActions";

const mapStateToProps = (state) => ({
  videos: state.videoReducers.videos
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllVideos: () => {
    dispatch(getAllVideos());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(VideosList);
