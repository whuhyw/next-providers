import { http, HttpOptions } from "@next-core/brick-http";
import { ModelLoginTrack } from "../../../model/permission";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ListLoginTrackRequestBody {
  /** 页码 */
  page: number;

  /** 页大小 */
  pageSize: number;

  /** 操作过滤条件 */
  operation?: string[];

  /** 登录用户过滤条件 */
  user?: string;

  /** IP 过滤条件 */
  ip?: string;

  /** 起始时间，支持时间戳和now-1d语义 */
  from?: string;

  /** 终止时间，支持时间戳和now-1d语义 */
  to?: string;
}

export interface ListLoginTrackResponseBody {
  /** 页码 */
  page: number;

  /** 页大小 */
  pageSize: number;

  /** 总数 */
  total: number;

  /** 登录轨迹列表 */
  list: Partial<ModelLoginTrack>[];
}

/**
 * @description 获取登录轨迹
 * @endpoint POST /api/v1/audit/login_track
 */
export const listLoginTrack = async (
  data: ListLoginTrackRequestBody,
  options?: HttpOptions
): Promise<ListLoginTrackResponseBody> =>
  (
    await http.post<ResponseBodyWrapper<ListLoginTrackResponseBody>>(
      "api/gateway/permission.audit.ListLoginTrack/api/v1/audit/login_track",
      data,
      options
    )
  ).data;
