import { http, HttpOptions } from '@next-core/brick-http';
import { ModelObjectBasicInfo } from '../../../model/cmdb';

export interface GetObjectBasicAllRequestParams {
  /** 按模型Id,模型id模糊匹配 */
  q?: string;

  /** 模型Id, 使用,分隔 */
  objectIds?: string;

  /** system */
  system?: string;

  /** 分类,支持like操作，%xxx% */
  category?: string;

  /** category是否为空，为true时会忽略参数category */
  emptyCategory?: boolean;

  /** system是否为空，为true时会忽略参数system */
  emptySystem?: boolean;

  /** 是否是抽象模型,true/false,为空则不过滤 */
  isAbstract?: string;

  /** 按父模型过滤 */
  parentObjectId?: string;
}

export interface GetObjectBasicAllResponseBody {
  /** 返回码 */
  code: number;

  /** 错误信息 */
  error: string;

  /** 返回消息 */
  message: string;

  /** 模型列表 */
  data: Partial<ModelObjectBasicInfo>[];
}

/**
 * @description 获取所有模型基本信息
 * @endpoint GET /object_basic_all
 */
export const getObjectBasicAll = (
  params: GetObjectBasicAllRequestParams,
  options?: HttpOptions
): Promise<GetObjectBasicAllResponseBody> =>
  http.get<GetObjectBasicAllResponseBody>(
    'api/gateway/cmdb.cmdb_object.GetObjectBasicAll/object_basic_all',
    { ...options, params }
  );
