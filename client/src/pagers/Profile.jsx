import { FormRow, SubmitBtn } from "../components";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { useOutletContext } from "react-router-dom";
import { Form } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const file = formData.get("avatar");
  if (file && file.size > 500000) {
    toast.info("image size is too large");
    return null;
  }
  try {
    await customFetch.patch("/users/update-user", formData);
    toast.success("profile is updated successfully");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
  return null;
};
const Profile = () => {
  const { user } = useOutletContext();
  const { name, lastName, location, email } = user;
  return (
    <Wrapper>
      <Form method="post" className="form" encType="multipart/form-data">
        <h4 className="form-title">profile</h4>
        <div className="form-center">
          {/* // * file input */}
          <div className="form-row">
            <label htmlFor="avatar" className="form-label">
              select an image max of 0.5 MB
            </label>
            <input
              type="file"
              name="avatar"
              id="avatar"
              className="form-input"
              accept="image/*"
            />
          </div>
          <FormRow name="name" type="text" defaultValue={name} />
          <FormRow
            name="lastName"
            type="text"
            labelText="last name"
            defaultValue={lastName}
          />
          <FormRow name="email" type="email" defaultValue={email} />
          <FormRow name="location" type="text" defaultValue={location} />

          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  );
};

export default Profile;
