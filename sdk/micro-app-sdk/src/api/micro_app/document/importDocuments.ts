import { http, HttpOptions } from "@next-core/brick-http";
import { ModelInstalledMicroAppDocument } from "../../../model/micro_app";

export interface ImportDocumentsRequestBody {
  /** 文档列表 */
  documents?: Partial<ModelInstalledMicroAppDocument>[];
}

/**
 * @description 导入小产品文档
 * @endpoint POST /api/micro_app/v1/document/import
 */
export const importDocuments = (
  data: ImportDocumentsRequestBody,
  options?: HttpOptions
): Promise<void> =>
  http.post<void>(
    "api/gateway/micro_app.document.ImportDocuments/api/micro_app/v1/document/import",
    data,
    options
  );
