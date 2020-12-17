// For a given tree-structured data write a function
// that finds a child with a specific name and returns it
const tree = {
  "name": "root",
  "children": [{
    "name": "A",
    "children": [
      { "name": "A-B" },
      { "name": "A-D", data: [] }
    ]
  }, {
    "name": "B",
  }]
};

function search(tree, val) {
  if (tree.name === val) {
    console.log("Value found in tree : ", val);
  } else if (tree.children) {
    for (var i = 0; i < tree.children.length; i++) {
      search(tree.children[i], val)
    }
  }
}

search(tree, 'A-B');
