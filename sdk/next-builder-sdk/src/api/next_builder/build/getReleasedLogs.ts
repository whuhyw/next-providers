import { http, HttpOptions } from "@next-core/brick-http";
import { ModelMicroAppReleasedLog } from "../../../model/next_builder";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface GetReleasedLogsRequestParams {
  /** 开始版本 */
  startVersion?: string;

  /** 结束版本，如果为 `current`时，返回当前build&push和expor models之后的数据作为发布日志 */
  endVersion?: string;
}

export interface GetReleasedLogsResponseBody {
  /** 开始版本的发布日志 */
  startReleasedLog?: Partial<ModelMicroAppReleasedLog>;

  /** 结束版本的发布日志 */
  endReleasedLog?: Partial<ModelMicroAppReleasedLog>;
}

/**
 * @description 获取两个版本之间的发布日志
 * @endpoint GET /api/v1/next-builder/released-logs/:projectId
 */
export const getReleasedLogs = async (
  projectId: string | number,
  params: GetReleasedLogsRequestParams,
  options?: HttpOptions
): Promise<GetReleasedLogsResponseBody> =>
  (
    await http.get<ResponseBodyWrapper<GetReleasedLogsResponseBody>>(
      `api/gateway/next_builder.build.GetReleasedLogs/api/v1/next-builder/released-logs/${projectId}`,
      { ...options, params }
    )
  ).data;
