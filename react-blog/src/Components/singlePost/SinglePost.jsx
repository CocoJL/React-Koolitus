import "./singlePost.css";
function SinglePost() {
  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        <img src='/assets/images/single.jpg' alt='' className='singlePostImg' />
        <h1 className='singlePostTitle'>
          lorem
          <div className='singlePostEdit'>
            <i className='singlePostIcon fa-solid fa-pen-to-square'></i>
            <i className='singlePostIcon fa-solid fa-trash'></i>
          </div>
        </h1>
        <div className='singlePostInfo'>
          <span className='singlePostAuthor'>
            Author: <b>Cipher</b>
          </span>
          <span className='singlePostDate'>1 hour ago</span>
        </div>
        <p className='singlePostDesc'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, corporis! Accusamus, repellat odio? Excepturi
          eveniet eos vel aut, quos illo cupiditate alias omnis nihil asperiores voluptatibus nesciunt velit atque
          perspiciatis. Laboriosam quam nemo sequi, dolorem earum magni architecto, illo commodi tenetur nesciunt,
          itaque ea nam fugit eum quaerat ratione ullam! Sunt nemo alias quos necessitatibus animi saepe sint tenetur
          ipsa. Soluta sapiente sint sequi, est nihil et modi aspernatur laborum iure velit excepturi possimus
          consequuntur enim ad eaque ipsam eos! Non quibusdam doloribus explicabo quisquam mollitia aspernatur
          laudantium in possimus? Nihil minima impedit beatae excepturi explicabo vero, nulla tempore provident
          voluptates similique fuga maiores ab accusantium, perferendis dolores itaque ea facilis obcaecati aut culpa
          nemo magni optio architecto. Facere, repellat! Error nisi consectetur quam corrupti odit. Sed, illum
          distinctio dolore, neque pariatur rerum unde ad eum necessitatibus assumenda accusamus adipisci! Ex inventore
          error amet beatae voluptas, quisquam quod voluptate harum. Explicabo hic quod, molestias molestiae doloribus
          amet assumenda id quae debitis corrupti nulla consequatur, soluta ad obcaecati. Fuga praesentium quam iusto
          ipsa cum quibusdam numquam. Nihil tenetur modi corporis cumque. Consequuntur cupiditate inventore ipsum
          molestias odio beatae ipsa quibusdam, eveniet, reprehenderit, quasi a eos. Voluptatum ab aut rem beatae! Nam
          possimus iure vero dicta omnis esse totam ducimus iusto rem!
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
