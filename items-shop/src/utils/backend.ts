// it should be a server that forward or some better design to put file but for learning purpose I leave like that

import type {Collections} from "~/types/Collections";

const fileServerLink = 'http://127.0.0.1:8090/api/files'

export namespace UtilsBackend {
    export function getFileUrl({collection, recordId, filename}: { collection: Collections, recordId: string, filename: string }): string {
        return `${fileServerLink}/${collection}/${recordId}/${filename}`;
    }
}