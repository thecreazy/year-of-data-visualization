export default function DayLayout(props) {
    const {children} = props
    return (
      <section id={`data-${children.props.childPropSegment}`} className="min-h-screen relative">
        <div className="container mx-auto py-8">
         <h2 className="text-3xl font-bold py-2">Day {children.props.childPropSegment}</h2>
        {children}
        </div>
      </section>
    )
  }