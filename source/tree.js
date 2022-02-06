'use strict';

let final_string = ""

function drawSpaces(line_number, tree_size)  {
    let max_count_spaces = tree_size - 1;
    for (let i = 0; i < max_count_spaces - line_number; ++i) {
         final_string += " ";
    }
}

function drawStars(line_number) {
    for (let i = 0; i < line_number * 2 - 1; ++i) {
        final_string += "*";
    }
}

function drawRoot(tree_size) {
    drawSpaces(1, tree_size);
    final_string += "|";
    drawSpaces(1, tree_size);
    final_string += "\n"
}

function drawLine(line_number, tree_size) {
    drawSpaces(line_number, tree_size);
    drawStars(line_number);
    drawSpaces(line_number, tree_size);
    final_string += "\n";
}

function drawTree(tree_size) {
    if (tree_size < 3) {
        return null;
    }

    for (let i = 1; i < tree_size; ++i) {
        drawLine(i, tree_size);
    }

    drawRoot(tree_size);

    let result = final_string
    final_string = ""

    return result;
}

const tree = tree_size => drawTree(tree_size);
