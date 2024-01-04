const Legend = ({ options = [{ color: 'red', label: 'test' }] }) => {
  return (
    <div className='legend-container flex justify-center'>
      {options.map((el) => {
        return (
          <div key={el.label} className='legend-element flex mr-4'>
            <div
              className='w-[20px] h-[20px] mr-1'
              style={{ backgroundColor: el.color }}
            />
            <p className='text-sm'>{el.label}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Legend;
