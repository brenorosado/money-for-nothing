import { ActivityIndicator } from "react-native";

export const Loading = (
    { size = "small" }: { 
        size?: number | "small" | "large"
    }
) => {
    return (
        <ActivityIndicator size={size} />
    )
}