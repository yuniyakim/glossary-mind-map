import { FC } from 'react';
import { Handle, NodeProps, Position } from 'reactflow';
import './term-node.css';

export const TermNode: FC<NodeProps> = ({data}) => (
  <>
    <Handle type="target" position={Position.Top} id="top" />
    <div className='node'>
      <div><b>{data.name}</b></div>
      <div className='definition'>{data.definition}</div>
    </div>
    <Handle type="source" position={Position.Bottom} id="bottom" />
  </>
);
