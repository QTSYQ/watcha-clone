import { useQuery } from "react-query";
import { detailApi, searchApi } from "../../apis/movieApi";
import { MovieDetail } from "../../types";
import { AxiosError, AxiosResponse } from "axios";
const useMovieDetail = (id: string) => {
  const queryFn = () => detailApi(id);
  return useQuery<AxiosResponse<MovieDetail>, AxiosError>(
    ["movieDetail", id],
    queryFn,
    {
      enabled: Boolean(id),
    }
  );
};

export default useMovieDetail;
