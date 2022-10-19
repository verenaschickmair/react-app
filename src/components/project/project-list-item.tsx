import { CalendarIcon, UsersIcon } from "@heroicons/react/24/outline"
import { Fragment } from "react"
import { ProjectData } from "../../interfaces/project-data"

type ProjectListItemProps = {
    projectData:ProjectData
}

export const ProjectListItem = ({projectData}:ProjectListItemProps) => {
    return(
        <Fragment>
            <a href="#" className="block hover:bg-gray-50">
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <p className="truncate text-sm font-medium text-indigo-600">
                    {projectData.title}
                  </p>
                  
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500">
                      <UsersIcon
                        className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                        aria-hidden="true"
                      />
                      {projectData.teamMembers.length} Members
                    </p>
          
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                  <CalendarIcon
                      className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <p>
                      Created on {" "}
                      <time dateTime={projectData.dateOfCreation}>
                        {projectData.dateOfCreation}
                      </time>
                    </p>
                  </div>
                  </div>
              </div>
            </a>
        </Fragment>
    )
}