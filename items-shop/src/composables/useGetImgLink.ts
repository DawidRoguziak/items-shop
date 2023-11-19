import type {Collection} from "~/types/Collection";

export default (collection: Collection, fileName: string): string => {
    const collectionName = collection.collectionName;
    const recordId = collection.id;

    const rc = useRuntimeConfig();
    return `${rc.public.baseURL}/files/${collectionName}/${recordId}/${fileName}`;
}