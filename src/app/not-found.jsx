import './notfound.css';

export default function NotFound() {
  return (
    <>
      <div className='error'>
        <div className='wrap'>
          <div className='404'>
            <pre>
              <code>
                <span>
                  <span className='green'>&lt;!</span>
                  <span>DOCTYPE html</span>
                  <span className='green'>&gt;</span>
                </span>
                <span className='orange'>&lt;html&gt;</span>
                <span className='orange'>&nbsp;&lt;style&gt;</span>
                {`  * {`}
                <span>
                  <span className='green'>&nbsp;&nbsp;&nbsp;everything</span>:
                  <span className='blue'>awesome</span>;
                </span>
                {`  }`}
                <span className='orange'>&nbsp;&lt;/style&gt;</span>
                <span className='orange'>&nbsp;&lt;body&gt;</span>
                <br />
                &nbsp;&nbsp;ERROR 404! FILE NOT FOUND!
                <br />
                <span className='comment'>
                  &nbsp;&nbsp;&lt;!--The page you are looking for,
                  <br /> &nbsp;&nbsp;is not where you think it is.--&gt;
                </span>
                <span className='orange'></span>
                <span className='info' />
                <span className='orange'>&nbsp;&lt;/body&gt;</span>
                <span className='orange'>&lt;/html&gt;</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </>
  );
}
