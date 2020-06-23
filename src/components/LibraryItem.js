import React from 'react';
import './LibraryItem.css';

const LibraryItem = (props) => {
	
  const onButtonClick = () => {
		console.log(props)
    const newSelected = {
      id: props.id,
      title: props.title,
    }
    props.onUpdateSelected(newSelected)
	}
	
	const selected = () => {
		console.log(props)
		console.log("hi")
    if (props.id === props.selected_id) {
      return true
    } else {
      return false
    }
	}
	
  return(
		<section className="movie-listing">
			<img src={ props.imageURL } alt={`poster for ${ props.title } `} />
			<section>
				<h3>{ props.title }</h3>
				<p>
					<strong>{ props.releaseDate }</strong>
				</p>
				<p>
					{ props.overview }
				</p>
				<button onClick={onButtonClick}>
					{console.log(props.selected_id)}
          {selected() ? 'Selected' : 'Select'}
      </button>
			</section>

		</section>
  );

}

export default LibraryItem;