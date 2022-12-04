import Video from "./Video";
import { useGetVideosQuery } from "../../features/api/apiSlice";
import VideoLoading from "../ui/loaders/VideoLoader";
import Error from "../ui/Error";

export default function Videos() {
	const { data: videos, isLoading, isError } = useGetVideosQuery();

	let content = null;
	if (isLoading) {
		content = (
			<>
				<VideoLoading />
				<VideoLoading />
				<VideoLoading />
				<VideoLoading />
			</>
		);
	}

	if (!isLoading && isError) {
		content = <Error message='There was an error' />;
	}

	if (!isError && !isLoading && videos?.length === 0) {
		content = <Error message='No videos found!' />;
	}
	if (!isError && !isLoading && videos?.length > 0) {
		content = videos?.map(video => <Video key={video.id} video={video} />);
	}

	return <>{content}</>;
}
