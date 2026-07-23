
const API_URL = '/api/heroes'

type RequestOptions = RequestInit

export async function apiClient <T>(
    endpoint: string,
    options: RequestOptions = {},
): Promise <T> {
    const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
});
    if (!response.ok) {
        throw new Error(`API error: ${response.status}`)
    }
    return response.json()
}