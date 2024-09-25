import React, { SetStateAction } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { AuthButton, CommentItem, CustomInput } from "@components";
import { Comment } from "../../realm/entity/Comment";
import { styles } from "./styles";

type HomeScreenProps = {
  comments: Comment[];
  newComment: string;
  setNewComment: React.Dispatch<SetStateAction<string>>;
  logOutHandler: () => void;
  addNewCommentHandler: () => void;
  currentPage: number;
  countOfPages: number;
  pageUp: () => void;
  pageDown: () => void;
};

export const HomeScreen: React.FC<HomeScreenProps> = (props) => {
  const {
    comments,
    setNewComment,
    newComment,
    logOutHandler,
    addNewCommentHandler,
    currentPage,
    pageDown,
    pageUp,
    countOfPages,
  } = props;
  console.log(countOfPages);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.logOutContainer} onPress={logOutHandler}>
        <Text style={styles.text}>Log Out</Text>
      </TouchableOpacity>

      <View style={styles.inputContainer}>
        <CustomInput
          placeholder={"New comment"}
          style={styles.input}
          value={newComment}
          onChange={setNewComment}
        />
        <AuthButton title={"Send"} onPress={addNewCommentHandler} />
      </View>
      <View style={styles.pageSelector}>
        <TouchableOpacity onPress={pageDown} disabled={currentPage == 1}>
          <Text
            style={currentPage == 1 ? styles.disabledArrow : styles.activeArrow}
          >
            {"<"}
          </Text>
        </TouchableOpacity>
        <Text style={styles.page}>{currentPage}</Text>
        <TouchableOpacity
          onPress={pageUp}
          disabled={currentPage >= countOfPages}
        >
          <Text
            style={
              currentPage >= countOfPages
                ? styles.disabledArrow
                : styles.activeArrow
            }
          >
            {">"}
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={comments}
        renderItem={({ item }) => <CommentItem item={item} />}
      />
    </View>
  );
};
