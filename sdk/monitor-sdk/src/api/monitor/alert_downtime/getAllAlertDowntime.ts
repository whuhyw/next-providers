import { http, HttpOptions } from "@next-core/brick-http";
import { ModelAlertDowntime } from "../../../model/monitor";

export interface GetAllAlertDowntimeRequestParams {
  /** 规则id, 多个用逗号分隔符 */
  alert_rule_id__in?: string;
}

export interface GetAllAlertDowntimeResponseBody {
  /** code */
  code?: number;

  /** 分页大小 */
  page_size?: number;

  /** 页数 */
  page?: number;

  /** 总数 */
  total?: number;

  /** msg */
  msg?: string;

  /** data */
  data?: Partial<ModelAlertDowntime>[];
}

/**
 * @description 获取告警屏蔽规则列表
 * @endpoint GET /api/v1/alert_downtime/config
 */
export const getAllAlertDowntime = (
  params: GetAllAlertDowntimeRequestParams,
  options?: HttpOptions
): Promise<GetAllAlertDowntimeResponseBody> =>
  http.get<GetAllAlertDowntimeResponseBody>(
    "api/gateway/monitor.alert_downtime.GetAllAlertDowntime/api/v1/alert_downtime/config",
    { ...options, params }
  );
