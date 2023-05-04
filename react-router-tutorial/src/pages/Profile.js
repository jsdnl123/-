import { useParams } from "react-router-dom";
import React from "react";
const data = {
  velopert: {
    name: "김민준",
    description: "리액트를 좋아하는 개발자",
  },
  james: {
    name: "위진세",
    description: "리액트 초보자..",
  },
};

const Profile = ({ match }) => {
  const params = useParams();
  console.log(params);
  const profile = data[params.username];

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};
export default Profile;
