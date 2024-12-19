import { TeamMember } from "./team-member"
import { teamMembers } from "./team-data"

export function TeamGrid() {
  return (
    <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {teamMembers.map((member) => (
        <TeamMember key={member.name} {...member} />
      ))}
    </div>
  )
}