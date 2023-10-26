import React from "react";
import Page from "../components/Page";
import Text from "../components/Text";
import CodeInput from "../components/CodeInput";
import { StyleSheet } from "react-native";
import Pressable from "../components/Pressable";

const CODE_LENGTH = 4;

const PasswordConfirmation = ({ navigation }) => {
  const [code, setCode] = React.useState("");

  const handleConfirm = () => {
    if (code.length < CODE_LENGTH) {
      return alert("Please enter the code");
    }

    navigation.navigate("Login");
  };

  return (
    <Page>
      <Text style={styles.text}>Enter the sms you received</Text>
      <CodeInput value={code} onValueChange={setCode} length={CODE_LENGTH} />
      <Pressable onPress={handleConfirm} style={styles.btn}>
        Confirm
      </Pressable>
    </Page>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    marginBottom: 8,
  },
  btn: {
    marginTop: 16,
  },
});

export default PasswordConfirmation;