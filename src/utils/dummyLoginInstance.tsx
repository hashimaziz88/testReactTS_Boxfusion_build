export const dummyLoginInstance = {
    login: async (username: string, password: string): Promise<{ success: boolean; role?: string }> => {
        // Simulate an API call with a delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        if (username === "admin" && password === "admin") {
            return { success: true, role: "admin" };
        } else if (username === "client" && password === "client") {
            return { success: true, role: "client" };
        } else {
            return { success: false };
        }
    },
    logout: () => {
        // Simulate logout by clearing localStorage
        localStorage.clear();
    },
};