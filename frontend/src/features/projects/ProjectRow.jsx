import { useState } from "react";
import Modal from "../../ui/Modal";
import Table from "../../ui/Table";
import toLocalDateShort from "../../utils/toLocalDateShort";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
import { HiEye, HioutlineTrash } from "react-icons/hi";
import { TbPencilMinus } from "react-icons/tb";
import ConfirmDelete from "../../ui/ConfirmDelete";
import useRemoveProject from "./useRemoveProject";
import CreateProjectForm from "./CreateProjectForm";
import ToggleProjectStatus from "./ToggleProjectStatus";
import { Link } from "react-router-dom";

const ProjectRow = ({ project, index }) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { removeProject } = useRemoveProject();

  return (
    <Table.Row key={project._id}>
      <td>{index + 1}</td>
      <td>{truncateText(project.title, 30)}</td>
      <td>{project.category.title}</td>
      <td>{toPersianNumbersWithComma(project.budget)}</td>
      <td>{toLocalDateShort(project.deadline)}</td>
      <td>
        <div className="flex flex-wrap items-center gap-2 max-w-[200px]">
          {project.tags.map((tag) => (
            <span className="badge badge-bg-secondary" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td>{project.freelancer?.name || "-"}</td>
      <td>
        <ToggleProjectStatus project={project} />
      </td>
      <td>
        <div className="flex items-center gap-x-4">
          {/* edit modal */}
          <>
            <button onClick={() => setIsEditOpen(true)}>
              <TbPencilMinus className="w-5 h-5 text-primary-900" />
            </button>
            <Modal
              open={isEditOpen}
              title={`ویرایش ${project.title}`}
              onClose={() => setIsEditOpen(false)}>
              <CreateProjectForm
                projectToEdit={project}
                onClose={() => setIsEditOpen(false)}
              />
            </Modal>
          </>
          {/* delete modal */}
          <>
            <button onClick={() => setIsDeleteOpen(true)}>
              <HioutlineTrash className="w-5 h-5 text-error" />
            </button>
            <Modal
              open={isDeleteOpen}
              title={`حذف ${project.title}`}
              onClose={() => setIsDeleteOpen(false)}>
              <ConfirmDelete
                resourceName={project.title}
                onClick={() => setIsDeleteOpen(false)}
                onConfirm={() =>
                  removeProject(project._id, {
                    onSuccess: () => setIsDeleteOpen(false),
                  })
                }
                disabled={false}
              />
            </Modal>
          </>
        </div>
      </td>
      <td>
        <Link to={project._id} className="flex justify-center">
          <HiEye className="w-5 h-5 text-primary-0" />
        </Link>
      </td>
    </Table.Row>
  );
};

export default ProjectRow;
