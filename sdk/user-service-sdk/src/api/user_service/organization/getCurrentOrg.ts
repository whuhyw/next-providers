import { http, HttpOptions } from "@next-core/brick-http";
import { ModelOrgInfo } from "../../../model/user_service";
import { ResponseBodyWrapper } from "../../../wrapper";

export type GetCurrentOrgResponseBody = Partial<ModelOrgInfo> &
  ModelOrgInfo_partial_2;

/**
 * @description 获取当前用户所属Org[内部]
 * @endpoint GET /api/v1/org/current
 */
export const getCurrentOrg = async (
  options?: HttpOptions
): Promise<GetCurrentOrgResponseBody> =>
  (
    await http.get<ResponseBodyWrapper<GetCurrentOrgResponseBody>>(
      "api/gateway/user_service.organization.GetCurrentOrg/api/v1/org/current",
      options
    )
  ).data;

export interface ModelOrgInfo_partial_2 {
  /** org */
  id: number;

  /** 过期时间戳, -1为永不过期 */
  expires: number;

  /** 创建日期 */
  createAt: string;

  /** 是否可用 */
  valid: boolean;

  /** 更新时间戳 */
  ts: number;
}
