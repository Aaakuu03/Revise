import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import TeamCard from "../components/TeamCard";

export default function Teams() {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    async function fetchTeamMember() {
      const response = await fetch(
        "https://betaapi.krofile.com/api/v1/user/@theenchantedkitchen/team"
      );
      const data = await response.json();
      console.log(data);
      setTeamMembers(data.data.allTeamMembers);
    }

    fetchTeamMember();
    console.log("This fetched data.", teamMembers);
  }, []);

  return (
    <>
      <Navbar />
      Teams
      {teamMembers.map((member) => (
        <TeamCard
          key={member.id}
          name={member.name}
          desc={member.post}
          since={member.joinedDate}
          image={member.image}
        />
      ))}
    </>
  );
}
