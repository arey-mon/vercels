export default function EditProduct(props){
	const fields = {};
	function change(e){

	}

	function submit(e){

	}

	return (
		<>
			<p className="item-icon"><img src={ "/img/list-items/" + props.iconSrc } alt={ props.iconAlt } /></p>
			<p className="item-title"><input type="text" name="title"  value={props.title} onChange={change} /></p>
			<p className="item-description"><input type="text" name="description" value={props.description} /></p>
			<p className="item-image"><img src={"/img/list-items/" + props.imgSrc } alt={props.imgAlt} style={{width:'100%'}} className="w3-hover-opacity" /> <input type="text" name="imgSrc"  value={props.imgSrc} /></p>
			<p className="footer"><img className="iconLeft" src={ "/img/list-items/" + props.iconLowLeft } /> <input type="text" name="iconLowLeft"  value={props.iconLowLeft} /><span className="rate"><input type="text" name="rate" value={ props.rate } /></span><img className="iconRight" src={"/img/list-items/" + props.iconLowRight } /> <input type="text" name="iconLowLeft" value={props.iconLowLeft} /></p>
			<p className="submit"><button onClick={submit}></button></p>
		</>
	);
}

