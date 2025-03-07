interface Params {
    page: string;
    limit: string;
    [key: string]: string | undefined; // Allows additional dynamic parameters
}

export interface ParamsState {
    params: Params;
}