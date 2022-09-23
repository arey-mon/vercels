export default function TiltFormProfessional(props){
/*
- What's your full name?
- Do you work for multiple companies?
- [ ]  Yes
- [ ]  No
- Please paste a link to one of the projects you manage

Your name needs to be mentioned for verification. You can use a press article or a link to the project's team

- Please paste a link to your main company, or project
- What's your role?
- Please share your Linkedin profile
If you don't use Linkedin, please paste another link that shows your work
- What excites you about the community?
- Anything else you would like to share?
- Please paste your number for professional events and verifications
- Thanks for filling out the form, please write your email address and we will get back to you soon

*/
	return (
				<p><label htmlFor="name">What's your full name ? </label><input type="text" name="name" onChange={props.change} /></p>
				<p><label htmlFor="">: </label><input type="" name="" onChange={change} /></p>
				<p><label htmlFor="">: </label><input type="" name="" onChange={change} /></p>
				<p><label htmlFor="">: </label><input type="" name="" onChange={change} /></p>
				<p><label htmlFor="">: </label><input type="" name="" onChange={change} /></p>
				<p><label htmlFor="email">Email: </label><input type="email" name="email" onChange={props.change} /></p>
		
	);
}
