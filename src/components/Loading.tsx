type LoadingProps = {
  value: number;
  max: number;
  color:
    | 'progress-primary'
    | 'progress-secondary'
    | 'progress-accent'
    | 'progress-success'
    | 'progress-warning'
    | 'progress-info'
    | null;
};

export default function Loading(props: LoadingProps) {
  if (props.value && props.max) {
    return (
      <progress
        className={`progress w-full ${props.color}`}
        value={props.value}
        max={props.max}
      ></progress>
    );
  }
  return <progress className={`progress w-full ${props.color}`}></progress>;
}
