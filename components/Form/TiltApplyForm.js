import TiltApply

export default function TiltApplyForm(props) {
/*****
Artist:
- Hi, nice to see you! What's your creator's name?

You can fill in your artist, label, or company's name, depending on your profile.

- What's the website that best represents you?

You may paste any link to your social media

- Where can I listen to your tracks?
- Is there anything you'd like to tell us?
- What's your email address? We’ll be in touch soon
*****/
	let fields = {
		type: props.type,
	};

	function change(e){
		fields[e.target.name] = e.target.value;
	}

	function submit(e){
		e.preventDefault();
		props.sendFormTo(fields);
	}

	return ( props.isVisible &&
		<div className="TiltApplyFormMask" onClick={() => props.setIsVisible(false) }>
			<form className="TiltApplyForm" onClick={ (e) => e.stopPropagation() }>
				<h1 className="title">Fill in your infos: </h1>
				<p><label htmlFor="email">Email: </label><input type="email" name="email" onChange={change} /></p>
				<p><label htmlFor="socialNetwork">Social network: </label><input type="text" name="socialNetwork" onChange={change} /></p>
				<p><label htmlFor="comment">Your comment: </label><textarea name="comment" onChange={change} ></textarea></p>
				<p><button type="submit" className="submit" onClick={submit}>Submit</button></p>
			</form>
		</div>
	);
}
