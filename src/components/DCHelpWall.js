import React, { useState } from "react";
import HelpCard from "./HelpCard";

export default function HelpWall({ users }) {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {users.map((each) => {
          if (each.hposts.length >= 1) {
            var d = new Date(Date.parse(each.created_at));

            return (
              <HelpCard
                key={each.id}
                name={each.first_name}
                image={each.profile_url}
                title={each.hposts.map((c) => c.title)}
                request={each.hposts.map((c) => c.h_request)}
                created_at={each.created_at}
                phone={each.phone}
                email={each.email}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
