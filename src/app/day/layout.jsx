import { Marvel } from '@internal/components/Marvel/Marvel';

export default function DayLayout(props) {
  const { children } = props;
  return (
    <main
      id={`data-${children.props.childPropSegment}`}
      className='relative min-h-screen px-[32px]'
    >
      {children.props.childPropSegment === '51' && <Marvel />}
      <div className='container mx-auto py-8 relative'>
        <h2 className='py-2 text-3xl font-bold'>
          Day {children.props.childPropSegment}
        </h2>
        {children}
      </div>
    </main>
  );
}
