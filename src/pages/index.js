/** @jsx jsx */
import React from "react"
import {Card, Box, Label, Input, Button, jsx, useColorMode} from 'theme-ui'

import Layout from '../modules/ui/Layout'
import SEO from "../modules/utility/seo"

const IndexPage = () => {
  const [colorMode, setColorMode] = useColorMode()
  
  return (
    <Layout>
      <SEO title="Home" />
      <Card>
        <h2> Current Theme: {colorMode === 'default' ? 'Maker Default' : 'Oasis'}</h2>
        <Box>
          <Label>Example Input</Label>
          <Input defaultValue="Default Text"></Input>
          <Button sx={{mt: 3}} onClick={() => setColorMode(colorMode === 'default' ? 'oasis' : 'default')}>Toggle Theme</Button>
        </Box>
      </Card>
    </Layout>
  )
}

export default IndexPage
