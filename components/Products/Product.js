import EditProduct from './EditProduct';
import ShowProduct from './ShowProduct';

export default function Product(props) {
		return (
		<div key={props.idx} className="w3-third w3-container w3-margin-bottom list-item">
			<div className="w3-container item-widget">
				{ props.editable &&
					<EditProduct 
						title={props.cell.title} 
						iconSrc={props.cell.icon.src}			
						iconAlt={props.cell.icon.alt}
						description={props.cell.description}			
						imgSrc={props.cell.img.src}
						imgAlt={props.cell.img.alt}
						iconLowLeft={props.cell.iconLowLeft}
						iconLowRight={props.cell.iconLowRight}
						rate={props.cell.rate}
					/>
				}
				{ ! props.editable &&
					<ShowProduct 
						title={props.cell.title} 
						iconSrc={props.cell.icon.src}			
						iconAlt={props.cell.icon.alt}
						description={props.cell.description}			
						imgSrc={props.cell.img.src}
						imgAlt={props.cell.img.alt}
						iconLowLeft={props.cell.iconLowLeft}
						iconLowRight={props.cell.iconLowRight}
						rate={props.cell.rate}
					/>

				}
			</div>
		</div>
		)
}
