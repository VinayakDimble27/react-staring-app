import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required(),
  job: yup.string().required(),
});

export default schema;
