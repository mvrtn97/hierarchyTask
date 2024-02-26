
function App() {
  const LIST = [
    {
        id: 1,
        parentId: null,
        name: 'Mercedes',
    },
    {
        id: 2,
        parentId: 1,
        name: 'CLA',
    },
    {
        id: 3,
        parentId: 1,
        name: 'GLA',
    },
    {
        id: 4,
        parentId: 1,
        name: 'C klassa',
    },
    {
        id: 5,
        parentId: 4,
        name: 'C klassa 100',
    },
    {
        id: 6,
        parentId: 4,
        name: 'C klassa 200',
    },
    {
        id: 7,
        parentId: 4,
        name: 'C klassa 300',
    },
    {
        id: 8,
        parentId: 1,
        name: 'E klassa',
    },
    {
        id: 9,
        parentId: 8,
        name: 'E klassa 100',
    },
    {
        id: 10,
        parentId: 8,
        name: 'E klassa 200',
    },
    {
        id: 11,
        parentId: 8,
        name: 'E klassa 300',
    },
];

const createHierarchy = (items, parentId = null) =>
  items
    .filter((item) => item.parentId === parentId)
    .map((item) => ({ ...item, children: createHierarchy(items, item.id) }));

const hierarchy = createHierarchy(LIST);

console.log(hierarchy);

const hierarchyToDisplay = (hierarchy) => {
  return (
    <ul>
      {hierarchy.map((item) => (
        <li key={item.id}>
          {item.name}
          {item.children && hierarchyToDisplay(item.children)}
        </li>
      ))}
    </ul>
  );
}
  return hierarchyToDisplay(hierarchy);
}
export default App
