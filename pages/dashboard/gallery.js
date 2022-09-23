import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import mariadb from 'mariadb';
import { initItems } from '../../helpers/list-items';
import Product from '../../components/Products/Product';
//import TiltApplyForm from '../components/Form/TiltApplyForm'

export default function Gallery(props) {
	const [items, setItems] = useState( initItems(props.products) );
	useEffect( () => { 
		let body = document.querySelector('body');
		body.classList.add('w3-light-grey');
		body.style.margin = '0 auto';
	} );

	function w3_open(){}
	function w3_close(){}
	return (
		<>
			<Head>
				<title>MarketPlace</title>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="stylesheet" href="/css/w3.css" />
				<link rel="stylesheet" href="/css/css.css" />
				<link rel="stylesheet" href="/css/font-awesome.min.css" />
				<link rel="stylesheet" href="/css/list-items.css" />
			</Head>
			{/* !PAGE CONTENT! */}
			<div className="w3-main">

				{/* Header */}
				<header id="portfolio">
					<a href="#"><img src="/img/list-items/avatar_g2.jpg" style={{width:'65px'}} className="w3-circle w3-right w3-margin w3-hide-large w3-hover-opacity" /></a>
					<span className="w3-button w3-hide-large w3-xxlarge w3-hover-text-grey" onClick={w3_open}><i className="fa fa-bars"></i></span>
					<div className="w3-container">
						<h1><b>My Portfolio</b></h1>
						<div className="w3-section w3-bottombar w3-padding-16">
							<span className="w3-margin-right">Filter:</span> 
							<button className="w3-button w3-black">ALL</button>
							<button className="w3-button w3-white"><i className="fa fa-diamond w3-margin-right"></i>Design</button>
							<button className="w3-button w3-white w3-hide-small"><i className="fa fa-photo w3-margin-right"></i>Photos</button>
							<button className="w3-button w3-white w3-hide-small"><i className="fa fa-map-pin w3-margin-right"></i>Art</button>
						</div>
					</div>
				</header>

				{/* Photo Grid*/}
							<div className="w3-row-padding list-row">

				{
					items.map( (cell, idx, arr) => {
						return ( 
							<Product cell={cell} idx={idx} editable={true} />
						);
					})
				}
							</div>

				{/* Pagination */}
				<div className="w3-center w3-padding-32 w3-row-padding">
					<div className="w3-bar">
						<a href="#" className="w3-bar-item w3-button w3-hover-black">«</a>
						<a href="#" className="w3-bar-item w3-black w3-button">1</a>
						<a href="#" className="w3-bar-item w3-button w3-hover-black">2</a>
						<a href="#" className="w3-bar-item w3-button w3-hover-black">3</a>
						<a href="#" className="w3-bar-item w3-button w3-hover-black">4</a>
						<a href="#" className="w3-bar-item w3-button w3-hover-black">»</a>
					</div>
				</div>
				{/* End Pagination */}
			</div>

			{/* End page content */}
		</>
	)
}

export async function getServerSideProps(context) {
	const conn = await mariadb.createConnection({
		host: process.env.DB_HOST, 
		database: process.env.DB_NAME, 
		user: process.env.DB_USER, 
		password: process.env.DB_PASSWORD
	});

	let rows;
	try {
		rows = await conn.query("SELECT * from product");
		console.log('rows: ', rows);
	} finally {
		conn.end();
	}

	return {
		props: {products: rows,},
	}
}

