import React from 'react'
import { useRouter } from 'next/router'
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core'

const ServiceDescription = () => {
  const {
    query: { service }
  } = useRouter()
  return (
    <>
      {service ? (
        <Card>
          <CardHeader title={service} />
          <CardContent>
            <Typography variant="h5">What is a {service}</Typography>
            <Typography variant="body1" color="textSecondary">
              The crown of your tooth is the visible top or the area of the
              tooth that is above the gum line. A dental crown (commonly called
              a crown or cap) is a replacement of the top of the tooth if it has
              been worn away by decay, fractured off or been endodontically
              treated.
            </Typography>
            <Typography variant="h5">Who does a {service} benefit?</Typography>
            <Typography variant="body1" color="textSecondary">
              Anyone with extensive damage or a generally weak tooth will
              benefit from the protection given by the covering nature of a
              crown. Dr. Ona is the best judge of when you would need a crown
              and it is best to trust his or her judgment.
            </Typography>
            <Typography variant="h5">How it is done</Typography>
            <Typography variant="body1" color="textSecondary">
              Dr. Ona will remove any decay and prepare the tooth for a crown to
              be fit over your tooth. Then an impression is made of the prepared
              tooth and is given to a dental technician who in turn makes the
              replacement crown. During this process a temporary crown will be
              temporarily placed over the prepared tooth to provide it
              protection from the environment. Once the permanent crown is
              finished, and the temporary is removed, it is rechecked to ensure
              proper fit and then is cemented over the prepared tooth.
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <Typography color="textSecondary">Select a service...</Typography>
      )}
    </>
  )
}

export default ServiceDescription
