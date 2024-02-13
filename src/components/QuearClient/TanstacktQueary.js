 "use client";
import {  QueryClient, QueryClientProvider } from "@tanstack/react-query";
const TanstacktQueary = ({children}) => {
    const queryClient = new QueryClient();
    return (
        <div>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </div>
    );
};

export default TanstacktQueary;