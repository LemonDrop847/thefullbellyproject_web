import { useState, useEffect } from "react";
import { db } from "../components/services/firebase";
import { onSnapshot, collection, orderBy , query , limit } from "firebase/firestore";
import Foots from "../components/Footer";

const Deliver = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(
        collection(db, "transactions"),
        orderBy("timestamp", "desc"),
        limit(15)
      ),
      (snapshot) => {
        const newPosts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })).slice(0, 15);
        setPosts(newPosts);
      }
    );
    return unsubscribe;
  }, []);
  
  return (
    <>
      {posts.map((post) => (
        <div className="container" key={post.id}>
          <div className="row adjust">
            <div className="col">
              <img
                style={{ maxHeight: "200px" }}
                src={post.imageUrls[0]}
                alt=""
              />
            </div>
            <div className="col">
              <h3>Fed {post.quantity}</h3>
              <h3>Location: {post.location}</h3>
              <h3>At: {post.timestamp.toDate().toDateString()}</h3>
            </div>
          </div>
        </div>
      ))}

      <Foots />
    </>
  );
};

export default Deliver;
