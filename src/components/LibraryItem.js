import React from 'react';

const LibraryItems = (props) => {
  
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

export default LibraryItems;