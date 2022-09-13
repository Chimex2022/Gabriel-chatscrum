import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./sign-in.css";
import content from "../../static/index";

const schema = yup.object().shape({
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

function SignIn() {
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
      <div className="signin-form">
        <h1>Chatscrum</h1>
        <h2>Sign In</h2>
        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {content.inputs.slice(1).map((input, idx) => (
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
          {/* submit */}
          <Link to="/scrumboard">
            <button type="submit">Submit</button>
          </Link>
          {/* Sign up */}
          <p>
            Don't have an account? <Link to="/sign-up">Sign up</Link>
          </p>
          <p>
            <Link to="/">Go home</Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default SignIn;
