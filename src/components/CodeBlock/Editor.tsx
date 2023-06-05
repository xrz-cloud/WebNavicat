import React from 'react'
import PlaygroundEditor, { EditorProps } from '@/components/playground/Editor'

const Editor: React.FC<EditorProps> = props => {
  return <PlaygroundEditor {...props} />
}

export default Editor
