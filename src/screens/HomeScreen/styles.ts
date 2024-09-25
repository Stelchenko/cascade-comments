import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: "white",
    flex: 1,
  },
  contentContainer: {
    gap: 16,
    paddingTop: 16,
  },
  logOutContainer: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  input: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    gap: 16,
  },
  pageSelector: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
    paddingTop: 10,
    alignItems: "center",
  },
  activeArrow: {
    fontSize: 20,
    color: "rgb(8,75,198)",
  },
  disabledArrow: {
    fontSize: 20,
    color: "rgb(141,141,151)",
  },
  page: {
    fontSize: 20,
  },
});
