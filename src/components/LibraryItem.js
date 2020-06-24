import React from 'react';
import PropTypes from 'prop-types';
import './LibraryItem.css';

const LibraryItem = (props) => {
	
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
			</section>

		</section>
  );

}

LibraryItem.propTypes = {
	title: PropTypes.string.isRequired,
	releaseDate: PropTypes.string.isRequired,
	overview: PropTypes.string.isRequired,
	imageURL: PropTypes.string.isRequired,
};

export default LibraryItem;