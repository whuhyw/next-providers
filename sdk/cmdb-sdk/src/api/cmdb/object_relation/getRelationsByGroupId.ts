import { http, HttpOptions } from "@next-core/brick-http";
import { ModelObjectRelation } from "../../../model/cmdb";

export interface GetRelationsByGroupIdResponseBody {
  /** 返回码 */
  code?: number;

  /** 页码 */
  error?: string;

  /** 返回信息 */
  message?: string;

  /** 数据 */
  data?: Partial<ModelObjectRelation>[];
}

/**
 * @description 根据关系分组查询关系列表
 * @endpoint get /object_relation/object/:object_id/relation_group/:group_id
 */
export const getRelationsByGroupId = (
  object_id: string | number,
  group_id: string | number,
  options?: HttpOptions
): Promise<GetRelationsByGroupIdResponseBody> =>
  http.get<GetRelationsByGroupIdResponseBody>(
    `api/gateway/cmdb.object_relation.GetRelationsByGroupId/object_relation/object/${object_id}/relation_group/${group_id}`,
    options
  );
