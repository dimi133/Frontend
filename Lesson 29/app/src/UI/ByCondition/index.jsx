import React from 'react'

export default function ByCondition({condition, children}) {
  return (
    <div>
        <>
            { condition ? children : '' }
        </>
    </div>
  )
}
