import React from 'react';

const LibraryItem = (props) => {
  
  return(
    <ul>
			<li>
				{ props.title }
			</li>
			<li>
				{ props.overview }
			</li>
			<li>
				{ props.releaseDate }
			</li>
    </ul>
  );

}

export default LibraryItem;