const Skeleton = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={`animate-pulse rounded-md bg-slate-200 dark:bg-accent ${className}`}
      {...props}
    />
  );
};

export default Skeleton;
