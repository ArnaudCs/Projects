import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import { Styles } from "../styles/GlobalStyles";

interface ButtonProps {
    onPress: () => void;
    title: string;
    isGreen?: boolean;
    isGray?: boolean;
}

export default function Button({ title, onPress, isGreen, isGray }: ButtonProps) {
    const theme = useContext(ThemeContext);
    return (
        <TouchableOpacity
            style={isGreen ? Styles.btnGreen : isGray ? Styles.btnGray : theme === "light" ? Styles.btnLight : Styles.btnDark}

            onPress={onPress}>
            <Text
                style={isGreen || isGray ? Styles.smallTextLight : theme === "dark" ? Styles.smallTextLight : Styles.smallTextDark}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
}
