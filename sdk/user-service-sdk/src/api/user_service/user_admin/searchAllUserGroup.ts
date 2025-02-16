import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface SearchAllUserGroupRequestBody {
  /** e.g.: { name: { $like: '%q%' } }, { $or: [{ name: { $like: '%q%' }}] } */
  query?: Record<string, any>;

  /** e.g.: { instanceId: true, name: true } */
  fields: Record<string, any>;

  /** 按字段排序, 留空默认按照实例ID降序排序(1表示升序, -1表示降序) e.g.: { instanceId: 1 } */
  sort?: Record<string, any>;
}

export interface SearchAllUserGroupResponseBody {
  /** 用户组列表 */
  list?: Record<string, any>[];
}

/**
 * @description 搜索所有用户组列表
 * @endpoint POST /api/v1/users/group/all
 */
export const searchAllUserGroup = async (
  data: SearchAllUserGroupRequestBody,
  options?: HttpOptions
): Promise<SearchAllUserGroupResponseBody> =>
  (
    await http.post<ResponseBodyWrapper<SearchAllUserGroupResponseBody>>(
      "api/gateway/user_service.user_admin.SearchAllUserGroup/api/v1/users/group/all",
      data,
      options
    )
  ).data;
