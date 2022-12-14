import { PlusIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { selectedTeamMembersState } from "../../../../global-state/selected-team-member-atom";
import { TeamMemberData } from "../../../../interfaces/team-member-data";
import { CustomButton } from "../../../custom-ui-elements/custom-button/custom-button";
import { Popup } from "../../../popup/popup";
import { AddTaskPopup } from "./add-task-popup/add-task-popup";

type AddTaskProps = {
  teamMembers: TeamMemberData[];
  projectId: number;
};

export const AddTask = ({ teamMembers, projectId }: AddTaskProps) => {
  const [showAddTaskView, setShowAddTaskView] = useState(false);
  const [selectedTeamMembers, setSelectedTeamMembers] = useRecoilState(
    selectedTeamMembersState
  );

  function onButtonClick() {
    setShowAddTaskView(true);
  }
  function onPopupClose() {
    setShowAddTaskView(false);
    setSelectedTeamMembers([]);
  }

  return (
    <div className="text-center">
      <div className="mt-6">
        <CustomButton
          onClick={onButtonClick}
          buttonText={"New task"}
          icon={<PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />}
        />
        <Popup trigger={showAddTaskView} onCloseClick={onPopupClose}>
          <AddTaskPopup
            onSuccess={onPopupClose}
            teamMembers={teamMembers}
            projectId={projectId}
          />
        </Popup>
      </div>
    </div>
  );
};
