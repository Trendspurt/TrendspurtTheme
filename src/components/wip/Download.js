import React from 'react'
import Button from '@material-ui/core/Button';
import GetAppIcon from '@material-ui/icons/GetApp';

function download(props) {
  window.open(props.url)
}

export default function Download(props) {
  return <div className="ts-Download">
    <Button variant="outlined" startIcon={<GetAppIcon />} onClick={download.bind(this, props)}>
      Download
    </Button>
    <div className="title">{props.children}</div>
  </div>
}