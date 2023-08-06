/**
 * A component that renders a loading indicator, an error message, or the rendered data from a query
 *
 * @param {Function} children A render function that takes the data as an argument and returns JSX. This is rendered when there is no error and the data is available.
 * @param {Object} data The data returned from the query
 * @param {boolean} isFetching Whether or not the query is currently fetching data
 * @param {boolean} isLoading Whether or not the query is currently loading data
 * @param {Object} error The error object returned from the query
 * @returns
 */
export function LoadingContent({
  children,
  data,
  isLoading,
  isFetching,
  error
}) {
  return isFetching || isLoading ? (
    <div className="flex flex-grow items-center justify-center m-4">
      <span className="loading loading-dots loading-lg"></span>
    </div>
  ) : error ? (
    <div className="alert alert-error">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-current shrink-0 h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>{error.message}</span>
    </div>
  ) : (
    <>{children(data)}</>
  );
}
