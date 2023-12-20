const User = ({ fill = "#F4F6F7" }) => {
    return (
      <svg
        width="33"
        height="33"
        viewBox="0 0 22 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 9.5C13.4853 9.5 15.5 7.48528 15.5 5C15.5 2.51472 13.4853 0.5 11 0.5C8.51472 0.5 6.5 2.51472 6.5 5C6.5 7.48528 8.51472 9.5 11 9.5Z" fill={fill}/>
        <path
          d="M0.5 23C0.5 17.201 5.20101 12.5 11 12.5C16.799 12.5 21.5 17.201 21.5 23H0.5Z" fill={fill}/>
      </svg>
    );
};

export default User;