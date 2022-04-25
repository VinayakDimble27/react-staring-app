import React from "react";
import AddUserComponent from "../components/AddUserComponent";
import { useDispatch, useSelector } from "react-redux";
import { addUserAction, setJob, setName } from "../actions/userActions";
import HeaderComponent from "../components/layouts/HeaderComopnent";
import schema from "../validation/addUserValidation";
import { setError } from "../actions/userActions";
const AddUserContainer = () => {
  // const [name,setName] = useState("");
  // const [job,setJob] = useState("");
  const dispatch = useDispatch();
  const { name, job, nameError, jobError } = useSelector(
    (state) => state.addUserReducer
  );

  const setNameWrapper = (e) => {
    dispatch(setName(e.target.value));
  };

  const setJobWrapper = (e) => {
    dispatch(setJob(e.target.value));
  };

  const addUserSubmithandler = (e) => {
    let data = {
      name,
      job,
    };
    e.preventDefault();
    schema
      .validate({ name, job }, { abortEarly: false })
      .then(() => {
        // e.inner.forEach((element) => {});

        dispatch(addUserAction(data));
      })
      .catch((e) => {
        e.inner.forEach((element) => {
          console.log(element.path);
          dispatch(setError(element));
        });
        console.log(e);
      });
  };
  return (
    <>
      <HeaderComponent />
      <AddUserComponent
        name={name}
        job={job}
        nameError={nameError}
        jobError={jobError}
        setNameWrapper={setNameWrapper}
        setJobWrapper={setJobWrapper}
        addUserSubmithandler={addUserSubmithandler}
      />
    </>
  );
};

export default AddUserContainer;
