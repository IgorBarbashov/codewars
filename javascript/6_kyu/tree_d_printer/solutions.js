function treeDPrinter(tree){
    const printTree = new Map();

    const printNode = (node, level) => {
        printTree.set(level, printTree.has(level) ? `${printTree.get(level)} ${node.value}` : `${node.value}`);

        if (node.children.length) {
            node.children.forEach(el => printNode(el, level + 1));
        }
    };

    printNode(tree, 0);
    return [...printTree.values()].join('\n');
}
