const Loading = () => {
  return (
    <div className="absolute inset-0 bg-white/60 h-full w-full flex items-center justify-center">
      <img
        src="/assets/loading-animation.gif"
        alt="Loading..."
        width={90}
        height={90}
      />
    </div>
  );
};

export default Loading;
