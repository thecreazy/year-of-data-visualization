export default function DayLayout(props) {
  const { children } = props;
  return (
    <section
      id={`data-${children.props.childPropSegment}`}
      className='relative min-h-screen'
    >
      <div className='container mx-auto py-8'>
        <h2 className='py-2 text-3xl font-bold'>
          Day {children.props.childPropSegment}
        </h2>
        {children}
      </div>
    </section>
  );
}
