import Head from 'next/head'
import React, { useState } from 'react';
//import TiltApplyForm from '../components/Form/TiltApplyForm'

export default function Home() {
	let fields = {
	};
	// const [isFormVisible, setIsFormVisible] = useState(false);
	// const [formType, setFormType] = useState(null);
	// const [formKey, setFormKey] = useState(0);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');

	function resetForm(){
		setName('');
		setEmail('');
		setSubject('');
		setMessage('');
	}

	function submitForm(e){
		e.preventDefault();
		sendFormTo({
				name, email, subject, message
				});
		resetForm();
	}

	function sendFormTo( fields ){
		let url = '/api/manage-form?';

		for(const [key, value] of Object.entries(fields)){
			url += key + '=' + value + '&';
		}

		fetch(url).then((response) => {
				// setIsFormVisible(false);
				// setFormKey(formKey => formKey + 1);
				});
	}

	function loadLocation(url){
		if( typeof window !== 'undefined' ){
			// window.location.href = url;
		}
	}
	function w3_open(){}
	function w3_close(){}

	return (
			<>
			<Head>
			<title>Tilt Music</title>
			<meta charset="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
			{/* Typos */}
			<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway" />
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
			<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap" />
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/IBM-type/0.5.4/css/ibm-type.min.css" />
			<link rel="stylesheet" href="./style.css" />
			<link href="./css/global.css" rel="stylesheet" />
			<link href="./css/index.css" rel="stylesheet" />
			<link href="./css/form.css" rel="stylesheet" />
			</Head>
			{/*
				<TiltApplyForm
				key={formKey}
				isVisible={isFormVisible}
				setIsVisible={setIsFormVisible}
				sendFormTo={sendFormTo}
				type={formType}
				/>

				{/* Navbar (sit on top) */}
				<div className="w3-top">
					<div className="w3-bar w3-white w3-card" id="myNavbar">
					<img className="logo-img" src="https://aliettedecrozet.files.wordpress.com/2022/08/tilt-logo_marronclairgold-1.png?resize=214%2C214" />
					{/* Right-sided navbar links */}
				<div className="w3-right w3-hide-small">
					<a href="/list-items" className="w3-bar-item w3-button">Marketplace</a>
					<a href="#" className="w3-bar-item w3-button">Gallerys</a>
					<a href="#about" className="w3-bar-item w3-button">About Us</a>
					<a href="#" className="w3-bar-item w3-button SignIn"><span>Sign In</span></a>
					</div>
					{/* Hide right-floated links on small screens and replace them with a menu icon */}
				<a href="#" className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" onClick={w3_open}>
					<i className="fa fa-bars"></i>
					</a>
					</div>
					</div>

					{/* Sidebar on small screens when clicking the menu icon */}
				<nav className="w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large" style={{display: 'none'}} id="mySidebar">
					<a href="#" onClick={w3_close} className="w3-bar-item w3-button w3-large w3-padding-16">Close ×</a>
					<a href="/list-items" onClick={w3_close} className="w3-bar-item w3-button">Marketplace</a>
					<a href="#" onClick={w3_close} className="w3-bar-item w3-button">Gallerys</a>
					<a href="#about" onClick={w3_close} className="w3-bar-item w3-button">About Us</a>
					<a href="#" onClick={w3_close} className="w3-bar-item w3-button SignIn">Sign In</a>
					</nav>

					{/* Header with full-height image */}
				<header className="bgimg-1" id="home">
					<div className="w3-text-white">
					<span className="title">Tilt Music</span><br/>
					<h2 style={{marginLeft:"25px"}}>Live the music you want</h2>
					</div>
					</header>



					{/*Wording Test*/}
					<div className="threeColumns">
					<div className="circleimg">
					</div>
					<h2 style={{width:'80%', textAlign: 'center', fontWeight: 'bold'}}>For All<br /></h2>
					<p style={{width:'80%', textAlign: 'justify'}}>
					<p style={{fontWeight: 'bold'}}>Discover new music</p>
					<ul>
					<li>Find the hottest releases</li>
					<li>Get recommendations</li>
					</ul>
					<p style={{fontWeight: 'bold'}}>Enjoy a various set of offers</p>
					<ul>
					<li>Occasional music consumer, fan, collector: this place is for you. Creators get in adverage 90% of the revenues</li>
					<li>Buy from artists</li>
					Create a virtuous circle in the economy: better enriching artists than NASDAQ.
					</ul>
					<p style={{fontWeight: 'bold'}}>Rank to the top</p>
					<ul>
					<li>Do just like usual, and be rewarded for it</li>
					</ul>
					</p>
					</div>

					{/* Wording */}
					<div className="threeColumns">
					<div className="circleimg">
					</div>
					<h2 style={{width:'80%', textAlign: 'center', fontWeight: 'bold'}}>For Creators<br /></h2>
					<p style={{width:'80%', textAlign: 'justify'}}>
					<p style={{fontWeight: 'bold'}}>Connect with the world</p>
					<ul>
					<li>Create your gallery</li>
					<li>Connect with a global marketplace</li>
					<li>Import physical or digital products</li>
					<li>Mint NFTs on web 3.0</li>
					</ul>

					<p style={{fontWeight: 'bold'}}>Support your fans</p>
					<ul>
					<li>Offer exclusive bonuses</li>
					<li>Challenge your community</li>
					<li>Reward your best consumers</li>
					</ul>

					<p style={{fontWeight: 'bold'}}>Increase your fanbase</p>
					<ul>
					<li>Benefit from highlights and boosters</li>
					<li>Interact with a global community</li>
					</ul>
					</p>
					</div>

					<div className="threeColumns">
					<div className="circleimg">
					</div>
					<h2 style={{width:'80%', textAlign: 'center', fontWeight: 'bold'}}>For Fans<br /></h2>
					<p style={{width:'80%', textAlign: 'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</div>

				{/* Wording */}
				{/*
				<div className="w3-container" style={{padding:'46px 16px' }} id="wording">
					<div className="wordList">
					<h3 className="">Offer your music - and more - in one click</h3>
					<ul>
					<li>Import any type of product, whether it is physical or digital</li>
					<li>Benefit from your gallery and a general marketplace</li>
					<li>Bundle physical and digital products</li>
					<li>Mint NFT on web 3.0</li>
					</ul>
					</div>
					<div className="wordList">
					<h3 className="">Reward your fans</h3>
					<ul>
					<li>Offer your fans exclusive bonuses</li>
					<li>Interact in a new way with your community</li>
					<li>Challenge your community to rank as top fans and win exclusive extras</li>
					</ul>
					</div>
					<div className="wordList">
					<h3 className="">Increase your fanbase</h3>
					<ul>
					<li>Push your music on the global marketplace</li>
					<li>Benefit from highlights and boosters</li>
					<li>Interact with a global community</li>
					</ul>
					</div>
					<div className="wordList">
					<h3 className="">Take advantage of a global community</h3>
					<ul>
					<li>Enjoy the power of an international group of industry professionals, artists, and music lovers</li>
					<li>Free access to discord forums, dedicated content, private events, and more...</li>
					</ul>
					</div>
					</div>
					*/}

					{/* Team Section */}
				<div className="w3-container" style={{padding:'46px 16px'}} id="team">
					<h3 className="w3-center">OUR TEAM</h3>
					<p className="w3-center w3-large">Crazy passionates for sure</p>
					<div className="w3-row-padding w3-grayscale" style={{marginTop:'34px'}}>
					<div className="w3-col l3 m6 w3-margin-bottom">
					<div className="w3-card">
					<img src="https://media-exp1.licdn.com/dms/image/C4E03AQGtpciimZgxKA/profile-displayphoto-shrink_400_400/0/1652789075341?e=1668643200&v=beta&t=SunlOI8gkVl9MOxCYPYgjoqPkmL406qRwDv2o6Jv2Y0" alt="Apolline" style={{width:'100%'}} />
					<div className="w3-container">
					<h3>Apolline Reymond</h3>
					<p className="w3-opacity">CEO</p>
					<p>Innovative spirit, visionary, looking for the best way. Experience of more than 10 years in sales in the music industry and 3 years in informatics.</p>
					<p>Background: sound engineer, booking agent, founder of Blue Cave Music & Tilt Edit. Ex student at 42 school in informatics and
					partnerships manager for the Paris Blockchain Week Summit and the NFT Day.</p>
					<p><button className="w3-button w3-light-grey w3-block"
					onClick={loadLocation('https://www.linkedin.com/in/apolline-reymond/')}>
					<i className="fa fa-linkedin-square" style={{fontSize:'34px', paddingTop:'5px'}}></i></button></p>
					</div>
					</div>
					</div>

					<div className="w3-col l3 m6 w3-margin-bottom">
					<div className="w3-card">
					<img src="https://media-exp1.licdn.com/dms/image/C5603AQFiMFsiG5QMVw/profile-displayphoto-shrink_400_400/0/1525507308387?e=1668643200&v=beta&t=ulKhD-F-J0aAzkKQc04ZwTAqzXYHUvcDS4wxq5_f33g" alt="Sébastien" style={{width:'100%'}} />
					<div className="w3-container">
					<h3>Sébastien Lapedra</h3>
					<p className="w3-opacity">CFO</p>
					<p>15 years of experience in finance, expert in financial modeling and investment. Specialized in strategy, blockchain tokenomics and gamification.</p>
					<p>Background: Funding manager for "La Caisse des Dépôts", quantitative analyst,
					Senior Quantitative Manager for Emerging Markets Portfolio at Swisscanto Fund, founder and advisor of various companies.</p>
						<p><button className="w3-button w3-light-grey w3-block"
						onClick={loadLocation('https://www.linkedin.com/in/sebastien-lapedra-0a54363/')}>
						<i className="fa fa-linkedin-square" style={{fontSize:'34px', paddingTop:'5px'}}></i></button></p>
						</div>
						</div>
						</div>

						<div className="w3-col l3 m6 w3-margin-bottom">
						<div className="w3-card">
						<img src="https://media-exp1.licdn.com/dms/image/C4E03AQGqGurXUFeNXA/profile-displayphoto-shrink_400_400/0/1663257669587?e=1668643200&v=beta&t=8rxNvVU6KM6YfIobMl1Zmzk1hs-Q6qDCNSYTXVSIl0Y" alt="Céline" style={{width:'100%'}} />
						<div className="w3-container">
						<h3>Céline Trouvé Kick</h3>
						<p className="w3-opacity">CMO</p>
						<p>15 years of experience in e-commerce and artist services. Ex- CMO of Difymusic and ex-Head of D2C & artists services at Universal Music and Because Music.</p>
						<p>Background: head of D2C e-commerce & Retail Manager @Because Music, CMO at Dify Music,
					the French leader in music retail, head of D2C merch & artist services at Universal Music.</p>
						<p><button className="w3-button w3-light-grey w3-block"
						onClick={loadLocation('https://www.linkedin.com/in/c%C3%A9line-trouve-kick/')}>
						<i className="fa fa-linkedin-square" style={{fontSize:'34px', paddingTop:'5px'}}></i></button></p>
						</div>
						</div>
						</div>

						<div className="w3-col l3 m6 w3-margin-bottom">
						<div className="w3-card">
						<img src="https://media-exp1.licdn.com/dms/image/C5603AQG2tjSstHK5nA/profile-displayphoto-shrink_400_400/0/1651768826654?e=1668643200&v=beta&t=CMfMC3gCnjlwJn72sDaKnTYRTKMevi75i1SP1okE370" alt="Michael" style={{width:'100%'}} />
						<div className="w3-container">
						<h3>Michael Rosenblatt</h3>
						<p className="w3-opacity">Head of US Partnerships</p>
						<p>30 years of experience as an entertainment executive in high-profile companies. Established a profitable track record working with a large artist population.</p>
						<p>Background: discovered and signed Madonna, brought the B-52s to a major label, ex. vice-president of Geffen records & MCA records, ex. head of A&R at WEA UK.</p>
						<p><button className="w3-button w3-light-grey w3-block"
						onClick={loadLocation('https://www.linkedin.com/in/michael-rosenblatt-a14ab6a/')}>
						<i className="fa fa-linkedin-square" style={{fontSize:'34px', paddingTop:'5px'}}></i></button></p>
						</div>
						</div>
						</div>
						</div>
						</div>

						{/* Advisors _ old section}
						<div className="w3-container" style={{padding:'46px 16px'}} id="team">
						<h3 className="w3-center">OUR ADVISORS</h3>
						</div>

						<div className="w3-row-padding w3-grayscale" style={{marginTop:'64px'}}>
						<div className="w3-col l3 m6 w3-margin-bottom">
						<div className="w3-card">
						<img src="https://media-exp1.licdn.com/dms/image/C5603AQEwx3Srfx7zgA/profile-displayphoto-shrink_800_800/0/1517003147451?e=1668643200&v=beta&t=3zqgH0zlOCoO2fxfikGad_MgH2wLch4tLJjUQGZgzB0" alt="Philippe" style={{width:'100%'}} />
						<div className="w3-container">
						<h3>Philippe Pochet</h3>
						<p className="w3-opacity">Lawyer</p>
						<p>Co-founder of the independent law firm FTPA. Specialized in IP and international law.</p>
						<p>Guarantor of regulation and legal aspects.</p>
						<p><button className="w3-button w3-light-grey w3-block"
						onClick={loadLocation('https://www.linkedin.com/in/philippe-pochet-99061443/')}>
						<i className="fa fa-linkedin-square" style={{fontSize:'34px', paddingTop:'5px'}}></i></button></p>
						</div>
						</div>
						</div>


						<div className="w3-col l3 m6 w3-margin-bottom">
						<div className="w3-card">
						<img src="https://media-exp1.licdn.com/dms/image/C4E03AQFmdYsZex5sZA/profile-displayphoto-shrink_400_400/0/1628149984426?e=1668643200&v=beta&t=0ScDCGueZeTgeconTeX0ZbptMoHmSUcLvVSyta92U0c" alt="Romain" style={{width:'100%'}} />
						<div className="w3-container">
						<h3>Romain Verlomme-Fried</h3>
						<p className="w3-opacity">Auctioneer</p>
						<p>NFT expert, Founder of TokenToMe, co-founder of the NFT Factory & Art Can Die.</p>
						<p>Guarantor of the auctions and art expertise.</p>
						<p><button className="w3-button w3-light-grey w3-block"
						onClick={loadLocation('https://www.linkedin.com/in/romain-verlomme-fried-a7658a217/')}>
						<i className="fa fa-linkedin-square" style={{fontSize:'34px', paddingTop:'5px'}}></i></button></p>
						</div>
						</div>
						</div>

						<div className="w3-col l3 m6 w3-margin-bottom">
						<div className="w3-card">
						<img src="https://media-exp1.licdn.com/dms/image/C4E03AQHuLi_2DwgLJw/profile-displayphoto-shrink_400_400/0/1625432160817?e=1668643200&v=beta&t=CcI3lmYAm_UIzKs6edeZXQs1LKDLSxisD5cNxQv7CDE" alt="Christophe" style={{width:'100%'}} />
						<div className="w3-container">
						<h3>Christophe Chiappa</h3>
						<p className="w3-opacity">Label Manager</p>
						<p>Label Manager at Believe Digital for Large Content Providers, and independent labels</p>
						<p>Specialist of new music monetization models.</p>
						<p><button className="w3-button w3-light-grey w3-block"
						onClick={loadLocation('https://www.linkedin.com/in/christophe-chiappa-5662834/')}>
						<i className="fa fa-linkedin-square" style={{fontSize:'34px', paddingTop:'5px'}}></i></button></p>
						</div>
						</div>
						</div>

						<div className="w3-col l3 m6 w3-margin-bottom">
						<div className="w3-card">
						<img src="https://media-exp1.licdn.com/dms/image/C4D03AQGBiYTgSMCI3g/profile-displayphoto-shrink_400_400/0/1550944336592?e=1668643200&v=beta&t=HWjgPehkIlEpz3ONCQvYBUBAKvwz90svFyOoNl843W8" alt="Kevin" style={{width:'100%'}} />
						<div className="w3-container">
						<h3>Kevin Didelot</h3>
						<p className="w3-opacity">Web3 Projects Builder</p>
						<p>Co-founder of Metasafe, Architecte DevOps for La Banque de France, founder of Keltio.</p>
						<p>Specialist of DevOps, architecture, and cybersecurity.</p>
						<p><button className="w3-button w3-light-grey w3-block"
						onClick={loadLocation('https://www.linkedin.com/in/kevin-didelot/')}>
						<i className="fa fa-linkedin-square" style={{fontSize:'34px', paddingTop:'5px'}}></i></button></p>
						</div>
						</div>
						</div>
						</div>
						*/}

					{/* Advisors section */}
					<div class="gradadvisors">
					{/* threeColumns */}
					<h3 className="w3-center" style={{marginTop:'34px'}}>OUR ADVISORS</h3>
					<div className="threeColumns gradadvisors">
					<div className="circleimg">
					<img src="https://media-exp1.licdn.com/dms/image/C5603AQEwx3Srfx7zgA/profile-displayphoto-shrink_800_800/0/1517003147451?e=1668643200&v=beta&t=3zqgH0zlOCoO2fxfikGad_MgH2wLch4tLJjUQGZgzB0" alt="Philippe" style={{width:'100%'}} />
					</div>

					<p style={{width:'80%', textAlign: 'center'}}>Philippe Pochet<br />
					Lawyer<br /><br />
					Co-founder of the independent law firm FTPA. Specialized in IP and international law.
					<br />Guarantor of regulation and legal aspects.</p>
					<button className="w3-button"
					onClick={loadLocation('https://www.linkedin.com/in/apolline-reymond/')}>
					<i className="fa fa-linkedin-square" style={{fontSize:'34px'}}></i></button>
					</div>

					<div className="threeColumns gradadvisors">
					<div className="circleimg">
					<img src="https://media-exp1.licdn.com/dms/image/C4E03AQFmdYsZex5sZA/profile-displayphoto-shrink_400_400/0/1628149984426?e=1668643200&v=beta&t=0ScDCGueZeTgeconTeX0ZbptMoHmSUcLvVSyta92U0c" alt="Romain" style={{width:'100%'}} />
					</div>
					<p style={{width:'80%', textAlign: 'center'}}>Romain Verlomme-Fried<br />
					Auctioneer<br /><br />
					NFT expert, Founder of TokenToMe,<br /> co-founder of the NFT Factory & Art Can Die.
					Guarantor of the auctions and art expertise.</p>
					<button className="w3-button"
					onClick={loadLocation('https://www.linkedin.com/in/apolline-reymond/')}>
					<i className="fa fa-linkedin-square" style={{fontSize:'34px'}}></i></button>
					</div>

					<div className="threeColumns gradadvisors">
					<div className="circleimg">
					<img src="https://media-exp1.licdn.com/dms/image/C4E03AQHuLi_2DwgLJw/profile-displayphoto-shrink_400_400/0/1625432160817?e=1668643200&v=beta&t=CcI3lmYAm_UIzKs6edeZXQs1LKDLSxisD5cNxQv7CDE" alt="Christophe" style={{width:'100%'}} />
					</div>
					<p style={{width:'80%', textAlign: 'center'}}>Christophe Chiappa<br />
					Label Manager<br /><br />
					Label Manager at Believe Digital for Large Content Providers, and independent labels
					Specialist of new music monetization models.</p>
					<button className="w3-button"
					onClick={loadLocation('https://www.linkedin.com/in/apolline-reymond/')}>
					<i className="fa fa-linkedin-square" style={{fontSize:'34px'}}></i></button>
					</div>
					<br />


					{/* twoColumns */}
					<div class="gradadvisors">
					<div className="twoColumns gradadvisors">
					<div className="circleimg">
					<img src="https://media-exp1.licdn.com/dms/image/C4E03AQFYigtrCXeFFw/profile-displayphoto-shrink_400_400/0/1552335023385?e=1668643200&v=beta&t=HPIn0SZbaBxynVNN_Qhq5acVmfn8RDmPt1Puhm_5Fho" alt="Raymond Gonzalez" style={{width:'100%'}} />
					</div>
					<p style={{width:'60%', textAlign: 'center'}}>Raymond Gonzalez<br />
					Manager<br /><br />
					Ex. manager and booker of various famous artists, such as Nina Simone, Compay Segundo, Khaled, etc.
					<br />MOM Production founder and CEO.</p>
					<button className="w3-button"
					onClick={loadLocation('https://www.linkedin.com/in/apolline-reymond/')}>
					<i className="fa fa-linkedin-square" style={{fontSize:'34px'}}></i></button>
					</div>

					<div className="twoColumns gradadvisors">
					<div className="circleimg">
					<img src="https://media-exp1.licdn.com/dms/image/C4D03AQGBiYTgSMCI3g/profile-displayphoto-shrink_400_400/0/1550944336592?e=1668643200&v=beta&t=HWjgPehkIlEpz3ONCQvYBUBAKvwz90svFyOoNl843W8" alt="Kevin" style={{width:'100%'}} />
					</div>
					<p style={{width:'60%', textAlign: 'center'}}>Kevin Didelot
					<br />Web3 Projects Builder
					<br />
					<br />
					Co-founder of Metasafe, Architecte DevOps for La Banque de France, founder of Keltio.
					Specialist of DevOps, architecture, and cybersecurity.</p>
					<button className="w3-button"
					onClick={loadLocation('https://www.linkedin.com/in/apolline-reymond/')}>
					<i className="fa fa-linkedin-square" style={{fontSize:'34px'}}></i></button>
					</div>
					</div>
					</div>

					{/* Test Zone */}

					{/* Contact Section */}
			<div className="w3-container w3-light-grey" style={{padding:'16px'}} id="contact">
				<h3 className="w3-center">CONTACT</h3>
				<p className="w3-center w3-large">Lets get in touch. Send us a message:</p>
				<div>
				<form onSubmit={submitForm}>
				<p><input className="w3-input w3-border" onChange={event => setName(event.target.value)} value={name} type="text" placeholder="Name" required name="Name" /></p>
				<p><input className="w3-input w3-border" onChange={event => setEmail(event.target.value)} value={email} type="text" placeholder="Email" required name="Email" /></p>
				<p><input className="w3-input w3-border" onChange={event => setSubject(event.target.value)} value={subject} type="text" placeholder="Subject" required name="Subject" /></p>
				<p><input className="w3-input w3-border" onChange={event => setMessage(event.target.value)} value={message} type="text" placeholder="Message" required name="Message" /></p>
				<p>
				<button onClick={submitForm} className="w3-button w3-black" type="submit">
				<i className="fa fa-paper-plane"></i> SEND MESSAGE
				</button>
				</p>
				</form>
				</div>
				</div>

					<footer className="" id="home">
					</footer>
					</>
					);
			}
