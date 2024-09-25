import React, { useState } from "react";
import { Text, TouchableOpacity, View, ViewStyle } from "react-native";
import { Comment } from "../../realm/entity/Comment";
import { useQuery, useRealm } from "@realm/react";
import { User } from "../../realm/entity/User";
import Realm from "realm";
import { useAuth } from "../../auth/useAuth";
import { styles } from "./styles";
import prompt from "@powerdesigninc/react-native-prompt";

type CommentItemProps = {
  item: Comment;
  style?: ViewStyle;
};

export const CommentItem: React.FC<CommentItemProps> = (props) => {
  const { item, style } = props;
  const [expanded, setExpanded] = useState(false);
  const realm = useRealm();
  const auth = useAuth();
  const user = useQuery(
    User,
    (collection) => collection.filtered("_id == $0", item.userId),
    [item.userId],
  );

  const originalComment = useQuery(Comment, (collection) =>
    collection.filtered("_id == $0", item.replyToId),
  );

  const originalCommentAuthor = useQuery(User, (collection) =>
    collection.filtered("_id == $0", originalComment[0]?.userId),
  );

  const comments = useQuery(
    Comment,
    (collection) => collection.filtered(`replyToId == $0`, item._id),
    [item._id],
  );

  const replyHandler = () => {
    prompt("", "Please enter a texts", (text) => {
      if (text.trim()) {
        realm.write(() => {
          return new Comment(realm, {
            text: text,
            userId: new Realm.BSON.ObjectId(auth.user?._id),
            replyToId: new Realm.BSON.ObjectId(item._id),
          });
        });
      }
    });
  };

  return (
    <View style={style}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.nameContainer}>
            <Text style={styles.text} numberOfLines={1}>
              {user[0].userName}
            </Text>
            {originalCommentAuthor.length > 0 ? (
              <Text style={styles.toText} numberOfLines={1}>
                {" "}
                to {originalCommentAuthor[0]?.userName}
              </Text>
            ) : null}
          </View>
          <TouchableOpacity onPress={replyHandler}>
            <Text style={styles.text}>Reply</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>{item.text}</Text>
      </View>

      {comments.length ? (
        <>
          <View>
            <TouchableOpacity
              style={{ paddingBottom: 10 }}
              onPress={() => setExpanded(!expanded)}
            >
              <Text style={styles.expandButton}>
                {expanded ? "Hide answers" : "Expand to see more answers"}
              </Text>
            </TouchableOpacity>
            {expanded &&
              comments.map((item) => {
                return (
                  <CommentItem
                    key={item._id.toString()}
                    style={styles.item}
                    item={item}
                  />
                );
              })}
          </View>
        </>
      ) : null}
    </View>
  );
};
