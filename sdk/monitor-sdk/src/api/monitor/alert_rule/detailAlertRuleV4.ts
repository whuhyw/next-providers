import { http, HttpOptions } from "@next-core/brick-http";
import { ModelAlertRule } from "../../../model/monitor";

export interface DetailAlertRuleV4RequestParams {
  /** 告警规则版本 */
  version?: number;
}

export interface DetailAlertRuleV4ResponseBody {
  /** code */
  code?: number;

  /** msg */
  msg?: string;

  /** data */
  data?: Partial<ModelAlertRule>;
}

/**
 * @description 获取告警规则详情(支持按历史版本搜索)
 * @endpoint GET /api/v4/alert_rule/config/:id
 */
export const detailAlertRuleV4 = (
  id: string | number,
  params: DetailAlertRuleV4RequestParams,
  options?: HttpOptions
): Promise<DetailAlertRuleV4ResponseBody> =>
  http.get<DetailAlertRuleV4ResponseBody>(
    `api/gateway/monitor.alert_rule.DetailAlertRuleV4/api/v4/alert_rule/config/${id}`,
    { ...options, params }
  );
