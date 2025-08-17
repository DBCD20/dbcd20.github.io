// Map each tag to specific classes
const tagClassMap: Record<string, string> = {
  ecs: "bg-yellow-100 text-yellow-800 border border-yellow-300",
  vpc: "bg-blue-100 text-blue-800 border border-blue-300",
  terraform: "bg-green-100 text-green-800 border border-green-300",
  eks: "bg-cyan-100 text-cyan-800 border border-cyan-300",
  aws: "bg-orange-100 text-orange-800 border border-orange-300",
  default: "bg-gray-100 text-gray-600 border border-gray-300",
}

const Tag = ({ tag }: { tag: string }) => {
  const classes = tagClassMap[tag.toLowerCase()] || tagClassMap.default
  return (
    <span className={`px-2 py-1 rounded text-xs font-small ${classes}`}>
      {tag}
    </span>
  )
}

export default Tag