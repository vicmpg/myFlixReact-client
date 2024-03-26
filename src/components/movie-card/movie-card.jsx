import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./movie-card.scss";

export const MovieCard = ({ movie, addFav, removeFav, isFavorite }) => {
    return (
        <Card className="h-100 mt-5 card-shadow">
            <Card.Img variant="top card-img" src={movie.ImagePath} />
            <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>{movie.Director.Name}</Card.Text>
                <Link to={`/movies/${encodeURIComponent(movie._id)}`}>
                    <Button variant="link">
                        Open
                    </Button>
                </Link>
                <div>
                    {isFavorite ? (
                        <Button className="my-2 me-2" onClick={() => removeFav(movie._id)}>Remove from Favorite</Button>
                    ) : (
                        <Button className="my-2 me-2" onClick={() => addFav(movie._id)}>Add to Favorite</Button>
                    )}
                </div>
            </Card.Body>
        </Card>
    );
};
// define all the props constraints for the MovieCard
MovieCard.propTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string,        
    }).isRequired
};