import axios from 'axios';
import {useNavigate} from 'react-router-dom'


const CreatePost = () => {

  const navigate = useNavigate();   

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    axios.post('http://localhost:3000/upload', formData)
      .then(() => {
        navigate('/feed');   
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="create-post">
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" name="image" accept="image/*" />
        <input type="text" name="caption" placeholder="Enter Caption" />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default CreatePost;
