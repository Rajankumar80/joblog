export const api = {
    baseUrl: "http://127.0.0.1:9000",
    jobs: {
        list: "/jobs/",
        detail: (id: number) => `/jobs/${id}/`,
    },
    auth: {
        login: "/api-token-auth/",
        signup: "/register/",
    },
}
