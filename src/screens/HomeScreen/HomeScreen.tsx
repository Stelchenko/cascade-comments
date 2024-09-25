import React, { SetStateAction } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { AuthButton, CommentItem, CustomInput } from "@components";
import { Comment } from "../../realm/entity/Comment";
import Realm from "realm";
import { styles } from "./styles";

type HomeScreenProps = {
  comments: Realm.Results<Comment>;
  newComment: string;
  setNewComment: React.Dispatch<SetStateAction<string>>;
  logOutHandler: () => void;
  addNewCommentHandler: () => void;
  page: number;
};

export const HomeScreen: React.FC<HomeScreenProps> = (props) => {
  const {
    comments,
    setNewComment,
    newComment,
    logOutHandler,
    addNewCommentHandler,
    page,
  } = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.logOutContainer} onPress={logOutHandler}>
        <Text>Log Out</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: "row", gap: 16 }}>
        <CustomInput
          placeholder={"New comment"}
          style={styles.input}
          value={newComment}
          onChange={setNewComment}
        />
        <AuthButton title={"Send"} onPress={addNewCommentHandler} />
      </View>
      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={comments}
        renderItem={({ item }) => <CommentItem item={item} />}
      />
    </View>
  );
};
