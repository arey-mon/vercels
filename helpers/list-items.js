/*
export default ListItems function (){
	
}
*/

export function initItems(products) { 
	return products.map(( product ) => {
		return {
			title: product.title,
			description: product.description,
			img: {
				src: product.imgSrc,
				alt: product.imgAlt,
			},
			icon: {
				src: product.iconSrc,
				alt: product.iconAlt,
			},
			rate: product.rate,
			iconLowLeft: (product.verified === 1 ? 'verified.png' : 'curated.png'),
			iconLowRight: product.iconLow
		}		
	});
}
