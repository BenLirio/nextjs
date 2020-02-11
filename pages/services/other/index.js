import React from 'react'
import Layout from '../../../components/Layout/Layout'
import Bread from '../../../components/shared/Bread'
import ServicePage from '../../../components/Services/ServicePage'
import other from '../../../js/services/other'

const index = () => {
  return <ServicePage serviceData={other} />
}

export default index
