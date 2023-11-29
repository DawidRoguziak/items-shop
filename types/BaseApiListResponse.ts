export interface BaseApiListResponse<T> {
    records: {
        items: T[];
        page: number;
        perPage: number;
        totalItems: number;
        totalPages: number;
    }
}