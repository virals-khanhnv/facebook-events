import React from 'react'
import LayoutPreview from './LayoutPreview'
import CalendarPreview from './CalendarPreview'

function MainPreview() {
  return (
    <div>
        <CalendarPreview />
        <LayoutPreview />
    </div>
  )
}

export default MainPreview