import { http, HttpOptions } from "@next-core/brick-http";
import { ModelObjectAttr } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface CreateRequestBody {
  /** 属性ID */
  id: string;

  /** 属性名称 */
  name: string;

  /** 'true' 唯一属性 */
  unique?: "true" | "false";

  /** 'true' 只读属性，'false' 可写属性 */
  readonly?: "true" | "false";

  /** 'true' 必填属性，'false' 非必填属性 */
  required?: "true" | "false";

  /** 属性分类 */
  tag?: string[];

  /** 属性的描述 */
  description?: string;

  /** 属性的提示 */
  tips?: string;

  /** 属性值类型，不同类型有不同字段 */
  value: ModelObjectAttr["value"];
}

export type CreateResponseBody = Partial<ModelObjectAttr>;

/**
 * @description 创建模型属性定义
 * @endpoint POST /object/:objectId/attr
 */
export const create = async (
  objectId: string | number,
  data: CreateRequestBody,
  options?: HttpOptions
): Promise<CreateResponseBody> =>
  (
    await http.post<ResponseBodyWrapper<CreateResponseBody>>(
      `api/gateway/cmdb.object_attribute.Create/object/${objectId}/attr`,
      data,
      options
    )
  ).data;
