import Heading from "../layout/Heading";
import emailjs from "emailjs-com"; 

export default function ContactForm() {
    function sendEmail(e) {
		e.preventDefault();

		emailjs.sendForm(
			"service_k7mcnpl", 
		    "template_yjqrb65",
			e.target, 
			"jiyj71ORX3nS0yNsf"
		).then(res=> {
			alert("Your message has been sent!");
			console.log(res);
		}).catch(err=> console.log(err));  
	}

    return (
        <form onSubmit={sendEmail}>
            <Heading content="Contact" />
            <p style={{ margin: '1rem 0 3rem', }} >Write your feedback here!</p>
            <section className="form-container">
            <div>
                <label>First name</label>
                <input name="first_name" required />
            </div>
            <div>
                <label>Last name</label>
                <input name="last_name" />
            </div>
            <div>
                <label>Email</label>
                <input name="user_email" required />
            </div>
            <div>
                <label>Message</label>
                <textarea name="message" required />
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
