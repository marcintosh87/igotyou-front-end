import React from "react";
import GratitudeCard from "./GratitudeCard";

export default function GratitudeWall({ users }) {
  return (
    <>
      {users.map((each) => {
        if (each.gposts.length >= 1) {
          return (
            <GratitudeCard
              key={each.id}
              name={each.first_name}
              image={each.profile_url}
              comment={each.gposts.map((c) => c.comment)}
              likes={each.gposts.map((c) => c.likes)}
            />
          );
        }
      })}
    </>
  );
}
