import Heading from "../layout/Heading";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
    firstName: yup.string().required("Enter your first name").min(3, "The first name must be at least 3 letter characters"),
    lastName: yup.string().required("Enter your last name").min(4, "The last name must be at least 4 letter characters"),
    email: yup.string().required("Please enter an email address").email("Please enter a valid email address"),
    subject: yup.string().required("Please select one option"),
    message: yup.string().required("Please enter your message").min(10, "The message must be at least 10 characters"),
});

export default function ContactForm() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm ({
        resolver: yupResolver(schema),
    });

    function onSubmit(data) {
        console.log(data);
        alert("Your validations passed through with success: " + JSON.stringify(data, null, 5));
        reset();
    }

    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Heading content="Contact" />
            <section className="form-container">
            <div>
            <label>First name</label>
                <input name="firstName" {...register("firstName")} />
                {errors.firstName && <div className="invalid">
                    {errors.firstName.message}
                </div>}
            </div>
            <div>
            <label>Last name</label>
            <input name="lastName" {...register("lastName")} />
                {errors.lastName && <div className="invalid">
                    {errors.lastName.message}
                </div>}
            </div>
            <div>
            <label>Email</label>
                <input name="email" {...register("email")} />
                {errors.email && <div className="invalid">
                    {errors.email.message}
                </div>}
            </div>
            <div>
            <label>Subject</label>
            <select {...register("subject")}>
                <option value="">Select a subject letter</option>
                <option className="subject-option" value="A">A</option>
                <option className="subject-option" value="B">B</option>
                <option className="subject-option" value="C">C</option>
            </select>
            {errors.subject && <div className="invalid">
                    {errors.subject.message}</div>}
            </div>
            <div>
            <label>Message</label>
                <textarea name="message" {...register("message")} />
                {errors.message && <div className="invalid">
                    {errors.message.message}
                </div>}
            </div>
            <div className="button-wrapper">
            <button type="submit" className="register">
              Send
            </button>
            </div>
            </section>
        </form>
    );
}
