import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ValidateToolPermissionRequestParams {
  /** 需要鉴权的权限点 */
  action: string;

  /** 需要鉴权的用户名 */
  user: string;

  /** 工具id */
  tool_id?: string;

  /** 调用工具的流程id */
  flow_id?: string;

  /** 如果一个权限点有数据权限,但是不想校验数据权限,这个参数传true，默认为false, 须传false */
  validate_action_only?: boolean;
}

export interface ValidateToolPermissionResponseBody {
  /** 是否鉴权成功 */
  accepted?: boolean;

  /** 是否为管理员 */
  is_admin?: boolean;

  /** 有权限的用户(组) */
  authorizers?: string[];
}

/**
 * @description 校验用户对工具的操作权限
 * @endpoint GET /api/v1/permission/validate
 */
export const validateToolPermission = async (
  params: ValidateToolPermissionRequestParams,
  options?: HttpOptions
): Promise<ValidateToolPermissionResponseBody> =>
  (
    await http.get<ResponseBodyWrapper<ValidateToolPermissionResponseBody>>(
      "api/gateway/permission.permission.ValidateToolPermission/api/v1/permission/validate",
      { ...options, params }
    )
  ).data;
