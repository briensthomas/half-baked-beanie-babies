import { Link } from 'react-router-dom';

export default function BeanieBaby({ id, title, image }) {
  return (
    // this should contain a react-router-dom Link to the detail page for this 
    // particular beanie baby.
    // it should also render the beanie baby's image and show the beanie baby's name
    <div className='beanie-baby'>
      <Link key={title + id} to={`/beanie/${id}`} />
      <h2>{title}</h2>
      <img className='beanie-img' src={image} />
    </div>
  );
}
