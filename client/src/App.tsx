import { useEffect, useMemo } from 'react';
import ReactFlow, {
  Controls,
  Background,
  MiniMap,
  useNodesState,
  useEdgesState,
} from 'reactflow';

import 'reactflow/dist/style.css';
import axios from 'axios';
import { TermNode } from './TermNode/TermNode';

function App () {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, ] = useEdgesState([]);
  const nodeTypes = useMemo(() => ({ term: TermNode }), []);

  useEffect(() => {
    axios.get(`http://localhost:9000/api/mind-map`)
    .then(res => {
      const data = res.data;
      setNodes(data.nodes);
      setEdges(data.edges);
    })
  }, []);


  return (
    <ReactFlow
      nodes={nodes}
      onNodesChange={onNodesChange}
      edges={edges}
      fitView
      nodeTypes={nodeTypes}
    >
      <Background />
      <Controls />
      <MiniMap />
    </ReactFlow>
  );
}

export default App;
