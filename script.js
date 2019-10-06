// Hello

function createNodes(rows) {

  var nodes = new Map(); // All our nodes

  for (i = 0; i < rows.length; i++) { // iterate over rows

    var row = rows[i]; // get row by index
    var node = nodes.get(row.id1); // get one node by id1.
    
    if(!node) { // check if node alreay exists.

      node = {
        id1: row.id1,
        links: []
      }

      nodes.set(row.id1, node);

    }

    node.links.push(row.id2);

  }

  return nodes;

}

function drawNode(node, nodes) {
  
  console.log("I am drawing the node itself. " + JSON.stringify(node));
  // TODO - Call VIZ-BUILDER API to draw the node itself.

  // if(node.flag1 == "1") {
  //   // TODO draw person
  // }

  //VIZBuilder.drawCircle(x, y, radius);

  for(i = 0; i < node.links.length; i ++) {

    var linkNodeId = node.links[i];

    var linkedNode = nodes.get(linkNodeId); // get linked node

    console.log("My linked node. " + JSON.stringify(linkedNode));
    // TODO - Call VIZ-BUILDER API to draw the node link.

    // if(linkedNode.flag1 == "1") {
    //   // TODO draw person
    // }

  }

}

// {id1, id2, flag1, flag2}

var data = {
  rows: [
    {
      id1: 1,
      id2: 2,
      flag1: "1",
      flag2: "0"
    },
    {
      id1: 1,
      id2: 3,
      flag1: "1",
      flag2: "0"
    },
    {
      id1: 2,
      id2: 3,
      flag1: "1",
      flag2: "0"
    },
    {
      id1: 2,
      id2: 5,
      flag1: "1",
      flag2: "0"
    },
    {
      id1: 5,
      id2: 1,
      flag1: "1",
      flag2: "0"
    }
  ]
};


/* Create graph nodes from rows data */
var nodes = createNodes(data.rows);

/* iterate over graph nodes and draw those nodes */
for (var node of nodes.values()) {
  drawNode(node, nodes);
}


