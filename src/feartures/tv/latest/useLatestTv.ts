import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { latestApi } from "../../../apis/tvApi";
import { TVDetail } from "../../../types";
const useLatedTv = () => {
  return useQuery<AxiosResponse<TVDetail>, AxiosError>("latesTv", latestApi);
};

export default useLatedTv;
