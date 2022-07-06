import React from 'react'
import GeneralSettings from './GeneralSettings'
import LabelCustom from './LabelCustom'
import './MainSettings.scss'

function MainSettings() {
  return (
    <div>
        <GeneralSettings />
        <LabelCustom />
    </div>
  )
}

export default MainSettings