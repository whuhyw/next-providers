import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

/** 详细文档，只返回parent.instanceId，不返回children */
export interface GetDocumentsDetailsResponseBody {
  /** 实例Id */
  instanceId?: string;

  /** 文档Id，全局唯一 */
  documentId?: string;

  /** 作者 */
  author?: string;

  /** 文档标题 */
  name?: string;

  /** 文档内容 */
  content?: string;

  /** 关联小产品 id */
  relatedMicroAppId?: string;

  /** 关联路由别名数组 */
  relatedRouteAliases?: string[];

  /** 文档顺序 */
  sort?: number;

  /** 创建时间 */
  ctime?: string;

  /** 修改时间 */
  mtime?: string;

  /** 文档状态 */
  status?: "editing" | "released";

  /** 上级文档 */
  parent?: GetDocumentsDetailsResponseBody_parent;
}

/**
 * @description 获取小产品的文档详情
 * @endpoint GET /api/v1/document/details/:documentId
 */
export const getDocumentsDetails = async (
  documentId: string | number,
  options?: HttpOptions
): Promise<GetDocumentsDetailsResponseBody> =>
  (
    await http.get<ResponseBodyWrapper<GetDocumentsDetailsResponseBody>>(
      `api/gateway/next_builder.document.GetDocumentsDetails/api/v1/document/details/${documentId}`,
      options
    )
  ).data;

export interface GetDocumentsDetailsResponseBody_parent {
  /** 实例Id */
  instanceId?: string;
}
