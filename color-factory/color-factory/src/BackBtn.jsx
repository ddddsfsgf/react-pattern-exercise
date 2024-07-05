import { Link } from "react-router-dom";

const BackBtn = () => {
  return (
    <button className='BackBtn'>
      <Link to='/colors'>Go Back</Link>
    </button>
  );
};

export default BackBtn;