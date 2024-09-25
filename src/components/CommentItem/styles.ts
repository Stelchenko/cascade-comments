import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    backgroundColor: "rgba(121,184,181,0.45)",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  container: {
    marginBottom: 10,
  },
  nameContainer: {
    flexDirection: "row",
    flex: 1,
  },
  toText: {
    flex: 1,
  },
  item: {
    width: "95%",
    alignSelf: "flex-end",
  },
  expandButton: {
    color: "rgb(8,75,198)",
  },
});
