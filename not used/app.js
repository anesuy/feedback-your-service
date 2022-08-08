function App() {
  const title = "Blog Post";
  const description = "This is my app";

  const comments = [
    { id: 1, text: "Comment one" },
    { id: 2, text: "Comment two" },
    { id: 3, text: "Comment three" },
  ];

//   {/     if (showComment === true) {

//     return();
    
//     } else {}
    
//     /}
//     -----
    
//     {/   showComments ? "yes" : "no"   /}
    
    
//     --------
    
    
//     {/   showComments ? "yes" : null   /}
    
    
//     --------
    
//     {/   showComments && "yes"    /}
    
    
//     --------

  return (
    <div className="container">
      <h1>{title.toUpperCase()}</h1>
      <p>{description}</p>

      <div className="comments">
        <h3> We have {comments.lenght} comments! </h3>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>{comment.text}</li>
          ))}
        </ul>
        OU
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
