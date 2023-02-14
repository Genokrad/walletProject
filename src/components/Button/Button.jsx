const Button = ({ title, type = 'button', onClick }) => {
  return (
    <button className="btn" type={type} onClick={onClick}>
      {title}
    </button>
  );
};

export { Button };
