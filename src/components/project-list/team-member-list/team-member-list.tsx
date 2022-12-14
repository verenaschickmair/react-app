import { Fragment } from "react";
import { TeamMemberData } from "../../../interfaces/team-member-data";

import { AddTeamMember } from "./add-team-member/add-team-member";
import { EmptyTeamMembers } from "./empty-team-member/empty-team-members";
import { TeamMemberListItem } from "./team-member-list-item/team-member-list-item";

type TeamMemberListProps = {
  shouldShowAddTeamMembers?: boolean;
  teamMembers: TeamMemberData[];
  preselectTeamMembers?: TeamMemberData[];
};
export const TeamMemberList = ({
  shouldShowAddTeamMembers = true,
  teamMembers,
  preselectTeamMembers,
}: TeamMemberListProps) => {
  return (
    <Fragment>
      <div className="mx-auto max-w-md sm:max-w-3xl">
        <div className="text-center">
          <h2 className="mt-2 text-lg font-medium text-gray-900">
            Select or add team members
          </h2>

          {shouldShowAddTeamMembers ? <AddTeamMember /> : null}
          {teamMembers.length > 0 ? null : <EmptyTeamMembers />}
        </div>
        <div className="mt-10">
          <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {teamMembers.map((person) => (
              <li key={person.id}>
                <TeamMemberListItem
                  person={person}
                  isSelected={preselectTeamMembers?.some(
                    (member) => member.id === person.id
                  )}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};
