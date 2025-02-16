import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 删除查询策略v2
 * @endpoint DELETE /v2/object/:object_id/relation_query_strategy/:id
 */
export const deleteRelationQueryStrategyV2 = (
  object_id: string | number,
  id: string | number,
  options?: HttpOptions
): Promise<void> =>
  http.delete<void>(
    `api/gateway/cmdb.cmdb_object.DeleteRelationQueryStrategyV2/v2/object/${object_id}/relation_query_strategy/${id}`,
    options
  );
