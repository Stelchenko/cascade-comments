import React, { useCallback, useMemo, useState } from "react";
import { HomeScreen } from "@screens/HomeScreen/HomeScreen";
import { useQuery, useRealm } from "@realm/react";
import { Comment } from "../../realm/entity/Comment";
import Realm from "realm";
import { useAuth } from "../../auth/useAuth";

export const HomeContainer = () => {
  const [newComment, setNewComment] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const auth = useAuth();
  const realm = useRealm();
  const comments = useQuery(Comment, (collection) =>
    collection.filtered("replyToId == $0", null),
  );

  const countOfPages = Math.ceil(comments.length / 25);

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

  const paginatedComments = useMemo(() => {
    return comments.slice((currentPage - 1) * 25, currentPage * 25);
  }, [comments, currentPage, countOfPages]);

  const logOutHandler = () => {
    auth.signOut();
  };

  const pageUp = () => {
    setCurrentPage(currentPage + 1);
  };

  const pageDown = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <HomeScreen
      countOfPages={countOfPages}
      pageDown={pageDown}
      pageUp={pageUp}
      currentPage={currentPage}
      addNewCommentHandler={addNewCommentHandler}
      comments={paginatedComments}
      newComment={newComment}
      setNewComment={setNewComment}
      logOutHandler={logOutHandler}
    />
  );
};
