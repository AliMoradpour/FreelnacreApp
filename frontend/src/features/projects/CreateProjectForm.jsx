import { useState } from "react";
import TextField from "../../ui/TextField";

const CreateProjectForm = () => {
  const [title, setTitle] = useState("");

  return (
    <form className="">
      <TextField
        label="عنوان پروژه"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
};

export default CreateProjectForm;
