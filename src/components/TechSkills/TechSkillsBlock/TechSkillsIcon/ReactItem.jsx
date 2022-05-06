export default function ReactItem() {
  return (
    <div>
      <svg display="none">
        <symbol id="react" viewBox="0 0 512 512">
          <path
            stroke="#61dafb"
            strokeWidth="18"
            fill="none"
            d="M317.47 291.43a71 183 30 1 0-.05.09zm-122.89.09a183 71 60 1 0-.05-.09zm61.47 35.43a183 71 0 1 0-.1 0z"
          />
        </symbol>
      </svg>

      <svg className="icon" width="25" height="25">
        <use xlinkHref="#react"></use>
      </svg>
    </div>
  );
}
