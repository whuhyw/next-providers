import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 删除模型关系定义
 * @endpoint DELETE /object_relation/:relation_id
 */
export const deleteRelation = (
  relation_id: string | number,
  options?: HttpOptions
): Promise<void> =>
  http.delete<void>(
    `api/gateway/cmdb.object_relation.DeleteRelation/object_relation/${relation_id}`,
    options
  );
