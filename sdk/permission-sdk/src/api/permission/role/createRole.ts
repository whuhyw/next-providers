import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface CreateRoleRequestBody {
  /** 角色名称 */
  role?: string;

  /** 角色下用户列表 */
  user?: string[];

  /** 角色下权限id列表 */
  permission?: string[];

  /** 角色禁用菜单列表 */
  forbidden_menu: string[];
}

export interface CreateRoleResponseBody {
  /** 角色id */
  id?: string;
}

/**
 * @description 新增角色权限配置
 * @endpoint POST /api/v1/permission_role/config
 */
export const createRole = async (
  data: CreateRoleRequestBody,
  options?: HttpOptions
): Promise<CreateRoleResponseBody> =>
  (
    await http.post<ResponseBodyWrapper<CreateRoleResponseBody>>(
      "api/gateway/permission.role.CreateRole/api/v1/permission_role/config",
      data,
      options
    )
  ).data;
