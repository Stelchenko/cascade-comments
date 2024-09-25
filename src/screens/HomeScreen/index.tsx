import React, { useCallback, useState } from "react";
import { HomeScreen } from "@screens/HomeScreen/HomeScreen";
import { useQuery, useRealm } from "@realm/react";
import { Comment } from "../../realm/entity/Comment";
import Realm from "realm";
import { useAuth } from "../../auth/useAuth";

export const HomeContainer = () => {
  const [newComment, setNewComment] = useState("");
  const [page, setPage] = useState(1);
  const auth = useAuth();
  const realm = useRealm();
  const comments = useQuery(Comment, (collection) =>
    collection.filtered("replyToId == $0", null),
  );

  const addNewCommentHandler = useCallback((): void => {
    if (!newComment) {
      return;
    }

    realm.write(() => {
      return new Comment(realm, {
        text: newComment,
        userId: new Realm.BSON.ObjectId(auth.user?._id),
        replyToId: undefined,
      });
    });
  }, [realm, newComment]);

  const logOutHandler = () => {
    auth.signOut();
  };

  return (
    <HomeScreen
      page={page}
      addNewCommentHandler={addNewCommentHandler}
      comments={comments}
      newComment={newComment}
      setNewComment={setNewComment}
      logOutHandler={logOutHandler}
    />
  );
};
