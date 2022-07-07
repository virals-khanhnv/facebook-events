import React from 'react'
import GeneralSettings from './GeneralSettings'
import LabelCustom from './LabelCustom'
import CalendarSnippet from './CalendarSnippet'
import AdvancedSettings from './AdvancedSettings'
import MainPreview from './MainPreview'

function MainSettings() {
  return (
    <div>
        <GeneralSettings />
        <LabelCustom />
        <CalendarSnippet />
        <AdvancedSettings />
        <MainPreview />
    </div>
  )
}

export default MainSettings             