import { useState } from "react";
import Modal from "../../../ui/Modal";
import useUsers from "../useUsers";
import ChangeUserStatus from "./ChangeUserStatus";

const statusStyle = [
  {
    label: "رد شده",
    className: "badge--danger",
  },
  {
    label: "در انتظار تایید",
    className: "badge--secondary",
  },
  {
    label: "تایید شده",
    className: "badge--success",
  },
];

function UserRow({ user, index }) {
  const [open, setOpen] = useState(false);
  const { status, name, email, phoneNumber, role } = useUsers();

  return (
    <Table.Row key={project._id}>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phoneNumber}</td>
      <td>{role}</td>
      <td>
        <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>
      <td>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="تغییر وضعیت کاربر">
          <ChangeUserStatus onclose={() => setOpen(false)} userId={user._id} />
        </Modal>

        <button onClick={() => setOpen(true)}>
          <MdAssignmentAdd className="w-5 h-5 text-primary-900" />
        </button>
      </td>
    </Table.Row>
  );
}

export default UserRow;
