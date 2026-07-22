
const API_URL = 'https://superheroapi.com/api/34993e4a554a8325c94d41cf23357705/'

type RequestOptions = RequestInit

export async function apiClient <T>(
    id: number,
    endpoint: string,
    options: RequestOptions = {},
): Promise <T> {
    const response = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers: {
            'ContentType': 'application/json',
            ...options.headers
        }
    })
    if (!response.ok) {
        throw new Error(`API error: ${response.status}`)
    }
    return response.json()
}