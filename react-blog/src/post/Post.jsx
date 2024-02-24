import "./post.css";

function Post() {
  return (
    <div className='post'>
      <img className='postImg' src='/assets/images/post.jpg' alt='' />
      <div className='postInfo'>
        <div className='postCats'>
          <span className='postCat'>Music</span>
          <span className='postCat'>Life</span>
        </div>
        <span className='postTitle'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
        <hr />
        <span className='postDate'>1 hour ago</span>
      </div>
      <p className='postDesc'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ea nulla neque tempora ipsum. Consequuntur
        voluptates in quae, tempora, cumque voluptatem asperiores itaque nemo eaque ducimus, quia corporis consectetur
        sit. Reprehenderit ea architecto adipisci omnis dolor commodi, expedita, aut nobis quia impedit et! Doloremque
        totam impedit alias quasi consectetur? Tenetur voluptatum totam quaerat reprehenderit debitis eius mollitia ea!
        Dignissimos, saepe! Adipisci tempora corporis et incidunt consectetur? Saepe animi similique eos.
      </p>
    </div>
  );
}

export default Post;
