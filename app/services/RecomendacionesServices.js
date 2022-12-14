import { collection, getDocs, query } from "firebase/firestore";

export const getRecomendaciones = async () => {
  const queryContacts = query(collection(global.dbCon, "/Recomendaciones"));
  const querySnapshot = await getDocs(queryContacts);
  let tmpContacts = [];
  querySnapshot.forEach((noticeDoc) => {
    tmpContacts.push(noticeDoc.data());
  });
  //console.log("Recomendaciones---------------------------: ", tmpContacts);
  return tmpContacts;
};
