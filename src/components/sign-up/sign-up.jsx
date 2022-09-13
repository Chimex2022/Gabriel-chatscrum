import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./sign-up.css";
import content from "../../static/index";

const schema = yup.object().shape({
  fullname: yup
    .string()
    .required("This field is required!")
    .min(6, "Too short!"),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Required!"),
  password: yup
    .string()
    .required("Please enter password!")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
});

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <section className="auth">
      <div className="signup-form">
        <h1>Chatscrum</h1>
        <h2>Sign Up</h2>
        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name, Email, Password */}
          {content.inputs.map((input, idx) => (
            <label key={idx}>
              <span>{input.label}</span>
              <input
                type={input.type}
                name={input.name}
                placeholder={input.placeholder}
                {...register(`${input.name}`)}
              />
              <span className="message">{errors[input.name]?.message}</span>
            </label>
          ))}
          {/* Project name - select */}
          <label htmlFor="projectName">
            <span>Project Name:</span>
            <select
              name="projectName"
              id="projectName"
              {...register(`projectName`, { required: true })}
            >
              <option>--select project name--</option>
              <option value="Chatscrum">Chatscrum</option>
            </select>
          </label>
          {/* User type - select */}
          <label htmlFor="user">
            <span>User type:</span>
            <select
              name="user"
              id="user"
              {...register(`user`, { required: true })}
            >
              <option>--select user type--</option>
              <option value="Owner">Owner</option>
              <option value="Visitor">Visitor</option>
              <option value="Not-to-say">Prefer not to say</option>
            </select>
          </label>
          {/* submit */}
          <button type="submit">Submit</button>

          {/* Sign in */}
          <p>
            Already have an account? <Link to="/sign-in">Sign in</Link>
          </p>
          <p>
            <Link to="/">Go home</Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default SignUp;
