import { http, HttpOptions } from "@next-core/brick-http";

export interface SearchTotalRequestBody {
  /** 查询条件, 与[实例搜索接口]的query字段说明一致 */
  query?: Record<string, any>;

  /** 按照权限过滤[权限列表] */
  permission?: string[];

  /** 是否只获取与自己有关的那部分数据, 默认为false */
  only_my_instance?: boolean;
}

export interface SearchTotalResponseBody {
  /** 返回码 */
  code: number;

  /** 错误信息 */
  error: string;

  /** 返回消息 */
  message: string;

  /** 实例总数 */
  data: number;
}

/**
 * @description 搜索总数
 * @endpoint POST /object/:objectId/instance/_search_total
 */
export const searchTotal = (
  objectId: string | number,
  data: SearchTotalRequestBody,
  options?: HttpOptions
): Promise<SearchTotalResponseBody> =>
  http.post<SearchTotalResponseBody>(
    `api/gateway/cmdb.instance.SearchTotal/object/${objectId}/instance/_search_total`,
    data,
    options
  );
