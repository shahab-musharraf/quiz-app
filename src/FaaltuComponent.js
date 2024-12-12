import React, {memo} from 'react'

const FaaltuComponent = (props) => {
  return (
    <div>
        <h1>I am a FaaltuComponent. Just for the testing purpose</h1>
        {
            console.log("Faaltu Component is rendering", props.count)
        }
    </div>
  )
}

export default memo(FaaltuComponent);