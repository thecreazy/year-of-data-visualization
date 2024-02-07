import './notfound.css';

export default function NotFound() {
  return (
    <>
      <div class='error'>
        <div class='wrap'>
          <div class='404'>
            <pre>
              <code>
                <span>
                  <span class='green'>&lt;!</span>
                  <span>DOCTYPE html</span>
                  <span class='green'>&gt;</span>
                </span>
                <span class='orange'>&lt;html&gt;</span>
                <span class='orange'>&nbsp;&lt;style&gt;</span>
                {`  * {`}
                <span>
                  <span class='green'>&nbsp;&nbsp;&nbsp;everything</span>:
                  <span class='blue'>awesome</span>;
                </span>
                {`  }`}
                <span class='orange'>&nbsp;&lt;/style&gt;</span>
                <span class='orange'>&nbsp;&lt;body&gt;</span>
                <br />
                &nbsp;&nbsp;ERROR 404! FILE NOT FOUND!
                <br />
                <span class='comment'>
                  &nbsp;&nbsp;&lt;!--The page you are looking for,
                  <br /> &nbsp;&nbsp;is not where you think it is.--&gt;
                </span>
                <span class='orange'></span>
                <span class='info' />
                <span class='orange'>&nbsp;&lt;/body&gt;</span>
                <span class='orange'>&lt;/html&gt;</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </>
  );
}
