import { Button, Card, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export const MovieView = ({movies}) => {

const {movieId} = useParams()
const movie = movies.find((movie) => movie._id === movieId);

console.log(movieId)

return (
  <Card className='shadow p-4 border-0'>
    <Row>
      <Col md='4'>
      <Card.Img 
          className=' movie-view-img'
          src={movie.image}
          alt=""/>
      </Col>
      <Col>
      <Card.Body>
      <Card.Title className='mt-2'>{movie.title}</Card.Title>
      <Card.Text>{movie.description}</Card.Text>
      <Card.Text><span className='text-title'>Genre:</span> {movie.genre.name}</Card.Text>
      <Card.Text><span className='text-title'>Director:</span> {movie.director.name}</Card.Text>
      <Link to='/'>
      <Button className='close-open-btn'>Back</Button>
      </Link>
    </Card.Body>
      </Col>
    </Row>


  </Card>

  );
};