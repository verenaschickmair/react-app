import { useRecoilState } from "recoil";
import { projectState } from "../../global-state/project-atom";
import { AddProject } from "./add-project/add-project";
import { ProjectListItem } from "./project-list-item";

export const ProjectItem = () => {
  const [projects] = useRecoilState(projectState);

  return (
    <div className="w-full space-y-6">
      <h1 className="mt-2 text-xl font-medium text-gray-900 text-center">
        Create or select a project
      </h1>
      <AddProject />
      <div
        className="overflow-hidden bg-white shadow sm:rounded-md"
        style={{
          marginTop: "20px",
          paddingTop: "20px",
          paddingBottom: "20px",
          margin: "auto",
          width: "80%",
        }}
      >
        <ul role="list" className="divide-y divide-gray-200">
          {projects.map((project) => (
            <li key={project.id}>
              <ProjectListItem projectData={project} tasks={[]} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
