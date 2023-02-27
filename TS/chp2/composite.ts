type LeafNode = {
  data: string;
};

type TreeNode = {
  children: Array<Tree>;
};

type Tree = LeafNode | TreeNode;

let tree: Tree = {
  children: [
    {
      data: "Leaf Node",
    },
    {
      children: [
        {
          data: "Second Leaf Node",
        },
      ],
    },
  ],
};

console.log("Tree : ", tree);
