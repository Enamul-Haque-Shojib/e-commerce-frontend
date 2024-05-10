

const Review = ({rev}) => {
    const {author, body, created, rating} = rev;
    return (
        
            <div className="card w-full bg-white shadow-xl mt-5">
  <div className="card-body">
    <h2 className="card-title">{author}</h2>
    <p>{created}</p>
    <p>{body}</p>
    <p>Rating: {rating}</p>
    
  </div>
</div>
        
    );
};

export default Review;