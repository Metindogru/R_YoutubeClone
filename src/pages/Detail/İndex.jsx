import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../../api";
import ReactPlayer from "react-player";
import Channel from "./Channel";
import Description from "./Description";
import Comments from "./Comments";
import { BasicLoader } from "../../components/Loader";
import Error from "../../components/Error";
import Card from "../../components/Card";

const Detail = () => {
  const [video, setVideo] = useState(null);
  const [error, setError] = useState(null);

  //* Arama parametrelerine erişim için kurulum
  const [searchParams] = useSearchParams();

  //* URL'deki "v" isimli parametreye eriş
  const id = searchParams.get("v");

  //* ID'si bilinen videonun bilgilerini api'dan al
  useEffect(() => {
    const params = { id, extend: 1 };

    api
      .get(`/video/info`, { params })
      .then((res) => setVideo(res.data))
      .catch((err) => setError(err.message));
  }, [id]);

  console.log(video);

  return (
    <div className="detail-page h-screen overflow-auto ">
      <div className="page-content">
        {/* Video içeriği */}

        <div>
          {/* Video */}

          <div className="h-[30vh] md:h-[50vh] lg:h-[60vh] rounded overflow-hidden">
            <ReactPlayer
              //playing={true}

              height={"100%"}
              width={"100%"}
              controls
              url={`https://www.youtube.com/watch?v=${id}`}
            />
          </div>

          {/* Açıklamalar */}
          {error ? (
            <Error info={error} />
          ) : !video ? (
            <BasicLoader />
          ) : (
            <div>
              {/* Başlık */}
              <h1 className="my-3 text-xl font-bold">{video.title}</h1>
              {/* kanal bilgileri */}
              <Channel video={video} />

              {/* Açıklama alanı */}
              <Description video={video} />

              {/* Yorumlar */}
              <Comments videoId={id} />
            </div>
          )}
        </div>

        {/* Önerilen videolar */}
        <div className="flex flex-col gap-5 p-1">
          {video?.relatedVideos.data.map(
            (item) =>
              item.type === "video" && (
                <Card key={item.videoId} video={item} isRow />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Detail;
