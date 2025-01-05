interface IFetchOptions {
    method: string;
    params: {
        genre: string;
        page: number;
    };
}

export const fetchService = async ({ method, params }: IFetchOptions) => {
    const queryParams = new URLSearchParams({
        page: params.page.toString(),
        genre: params.genre,
      });
    const response = await fetch(`/api/games?${queryParams}`, {
        method,
    });
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
};