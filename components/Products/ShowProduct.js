export default function ShowProduct(props){
	return (
		<>
			<p className="item-icon"><img src={ "/img/list-items/" + props.iconSrc } alt={ props.iconAlt } /></p>
			<p className="item-title"><b>{props.title}</b></p>
			<p className="item-description">{props.description}</p>
			<p className="item-image"><img src={"/img/list-items/" + props.imgSrc } alt={props.imgAlt} style={{width:'100%'}} className="w3-hover-opacity" /></p>
			<p className="footer"><img className="iconLeft" src={ "/img/list-items/" + props.iconLowLeft } /><span className="rate">{ props.rate }</span><img className="iconRight" src={"/img/list-items/" + props.iconLowRight } /></p>
		</>
	);
}
